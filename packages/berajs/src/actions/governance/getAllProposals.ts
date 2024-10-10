import { FALLBACK_BLOCK_TIME } from "@bera/config";
import { governanceClient } from "@bera/graphql";
import {
  GetProposals,
  GetProposalsQuery,
  GetProposalsQueryVariables,
  ProposalSelectionFragment,
  Proposal_Filter,
} from "@bera/graphql/governance";
import { wagmiConfig } from "@bera/wagmi/config";
import { getBlockNumber } from "@wagmi/core";

import { BeraConfig, Proposal } from "~/types";
import { computeActualStatus } from "./computeActualStatus";

export const getAllProposals = async ({
  config,
  where,
  offset = 0,
  perPage = 20,
}: {
  offset?: number;
  where: Proposal_Filter;
  perPage?: number;
  config: BeraConfig;
}): Promise<ProposalSelectionFragment[] | undefined> => {
  try {
    if (perPage > 1000) {
      throw new Error("perPage must be less than 1000");
    }

    if (!config.subgraphs?.governanceSubgraph) {
      throw new Error("governance subgraph uri is not found in config");
    }

    const [response, blockNumber] = await Promise.all([
      governanceClient.query<GetProposalsQuery>({
        query: GetProposals,
        variables: {
          offset,
          limit: perPage,
          where,
        } satisfies GetProposalsQueryVariables,
      }),
      getBlockNumber(wagmiConfig, {
        cacheTime: FALLBACK_BLOCK_TIME * 1000,
      }),
    ]);

    return response.data.proposals.map((p) => ({
      ...p,
      status: computeActualStatus(p, blockNumber),
    }));
  } catch (e) {
    console.error("getAllProposals:", e);
    return undefined;
  }
};
