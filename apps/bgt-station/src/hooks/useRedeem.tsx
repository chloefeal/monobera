import { useEffect, useState } from "react";
import { useBeraJs } from "@bera/berajs";

export const useRedeem = () => {
  const [redeemAmount, setRedeemAmount] = useState(0);
  const [payload, setPayload] = useState<any[]>([]);
  const { account } = useBeraJs();

  useEffect(() => {
    // const newPayload = [account, parseUnits(`${redeemAmount}`, 18).toString()];
    const newPayload = [account, "100"];

    setPayload(newPayload);
  }, [account, redeemAmount]);

  console.log(payload);
  return {
    redeemAmount,
    payload,
    setRedeemAmount,
  };
};