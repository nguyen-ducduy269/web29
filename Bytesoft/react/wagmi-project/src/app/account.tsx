import { useReadContract } from "wagmi";

export function Account() {
  const abi = [
    {
      type: "function",
      name: "balanceOf",
      stateMutability: "view",
      inputs: [{ name: "account", type: "address" }],
      outputs: [{ type: "uint256" }],
    },
    {
      type: "function",
      name: "totalSupply",
      stateMutability: "view",
      inputs: [],
      outputs: [{ name: "supply", type: "uint256" }],
    },
  ];

  const result = useReadContract({
    abi,
    address: "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D",
    functionName: "totalSupply",
  });

  console.log("result", result);

  return (
    <div>
      <div>ID:</div>
      <div>Balance: {result?.toString()}</div>
    </div>
  );
}
