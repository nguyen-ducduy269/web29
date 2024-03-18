import { config } from "@/config";
import { getBalance } from "@wagmi/core";
import { parseEther } from "viem";
import {
  useAccount,
  useBalance,
  useReadContracts,
  useSendTransaction,
} from "wagmi";

export function Account() {
  const acc1 = "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D";
  const acc2 = "0xD989e5468d0209cbcE14248fF6357Efa80aEb881";
  const { address } = useAccount();
  const { sendTransaction } = useSendTransaction();

  const result1 = useBalance({
    address,
    token: "0x62fE10Daa9111DEcB19Ab5C310745e1C5ceA8D86",
  });

  const sendToken = (e: any) => {
    e.preventDefault();
    sendTransaction({
      to: "0xD989e5468d0209cbcE14248fF6357Efa80aEb881",
      value: parseEther("0.01"),
    });
  };

  const result = getBalance(config, {
    address: acc1,
    token: "0x62fE10Daa9111DEcB19Ab5C310745e1C5ceA8D86",
  });

  const abi = [
    [
      {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_spender",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_from",
            type: "address",
          },
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
          {
            name: "",
            type: "uint8",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
        outputs: [
          {
            name: "balance",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
          {
            name: "",
            type: "string",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        constant: false,
        inputs: [
          {
            name: "_to",
            type: "address",
          },
          {
            name: "_value",
            type: "uint256",
          },
        ],
        name: "transfer",
        outputs: [
          {
            name: "",
            type: "bool",
          },
        ],
        payable: false,
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        constant: true,
        inputs: [
          {
            name: "_owner",
            type: "address",
          },
          {
            name: "_spender",
            type: "address",
          },
        ],
        name: "allowance",
        outputs: [
          {
            name: "",
            type: "uint256",
          },
        ],
        payable: false,
        stateMutability: "view",
        type: "function",
      },
      {
        payable: true,
        stateMutability: "payable",
        type: "fallback",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "owner",
            type: "address",
          },
          {
            indexed: true,
            name: "spender",
            type: "address",
          },
          {
            indexed: false,
            name: "value",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            name: "from",
            type: "address",
          },
          {
            indexed: true,
            name: "to",
            type: "address",
          },
          {
            indexed: false,
            name: "value",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
    ],
  ];

  const result2 = useReadContracts({
    contracts: [
      {
        abi,
        address: acc1,
        functionName: "transferFrom",
        args: [
          {
            name: "Account1",
            type: acc1,
          },
          {
            name: "Account2",
            type: acc2,
          },
          {
            name: "_value",
            type: 10,
          },
        ],
      },
    ],
  });

  console.log(result2);

  return (
    <div>
      <div>ID: {address}</div>
      <div>Balance: {result1.data?.symbol}</div>
      <div>Token: {result1.data?.formatted}</div>
      <br />
      <form action="">
        <input
          type="text"
          placeholder="Wallet Address: 0x..."
          style={{ width: "350px", height: "25px" }}
        />
        <button
          style={{ width: "150px", height: "33px", marginLeft: 10 }}
          onClick={(e) => sendToken(e)}
        >
          Send Avax
        </button>

        <button style={{ width: "150px", height: "33px", marginLeft: 10 }}>
          Send GLD
        </button>
      </form>
    </div>
  );
}
