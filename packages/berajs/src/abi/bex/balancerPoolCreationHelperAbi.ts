export const balancerPoolCreationHelperAbi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
      {
        internalType: "contract WeightedPoolFactory",
        name: "_weightedPoolFactory",
        type: "address",
      },
      {
        internalType: "contract IComposableStablePoolFactoryCreateV6",
        name: "_composableStablePoolFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "ComposableStablePoolCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "WeightedPoolCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "composableStablePoolFactory",
    outputs: [
      {
        internalType: "contract IComposableStablePoolFactoryCreateV6",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "contract IERC20[]",
        name: "createPoolTokens",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amplificationParameter",
        type: "uint256",
      },
      {
        internalType: "contract IRateProvider[]",
        name: "rateProviders",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "tokenRateCacheDurations",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "exemptFromYieldProtocolFeeFlag",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "joinWBERAPoolWithBERA",
        type: "bool",
      },
    ],
    name: "createAndJoinStablePool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "contract IERC20[]",
        name: "createPoolTokens",
        type: "address[]",
      },
      {
        internalType: "contract IERC20[]",
        name: "joinPoolTokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "normalizedWeights",
        type: "uint256[]",
      },
      {
        internalType: "contract IRateProvider[]",
        name: "rateProviders",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "swapFeePercentage",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "amountsIn",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "createAndJoinWeightedPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wBERA",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weightedPoolFactory",
    outputs: [
      {
        internalType: "contract WeightedPoolFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;