import { readContract } from "@wagmi/core";
import { abi } from "./abi";
import { config } from "./config2";

export async function Index() {
  const walletAdress = "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D";

  const result = await readContract(config, {
    abi,
    address: walletAdress,
    functionName: "totalSupply",
  });

  console.log("result", result);

  return <div>Wallet Value: </div>;
}
