import { config } from "@/config";
import { useState } from "react";
import { useAccount, useReadContracts } from "wagmi";
import { abi } from "./abi";

export function SendGLDTransaction() {
  const { address } = useAccount();
  const [toAddress, setToAddress] = useState("");
  const [value, setValue] = useState(0);

  const results = useReadContracts({
    config,
    contracts: [
      {
        address,
        abi,
        functionName: "transfer",
      },
    ],
  });

  console.log("results", results);

  const transferGLD = async (toAddress: string, value: number) => {
    if (!results) {
      console.error("results is null");
      return;
    }

    if (!toAddress) {
      console.error("toAddress is empty");
      return;
    }

    try {
      await results.queryKeys[1].execute(toAddress, value);
      console.log("GLD transfer successful");
    } catch (error) {
      console.error("GLD transfer failed", error);
    }
  };

  return (
    <form>
      <input
        name="to address"
        placeholder="0x......"
        required
        style={{ width: "350px", height: "25px", paddingLeft: "10px" }}
        onChange={(e: any) => setToAddress(e.target.value)}
      />
      <input
        name="value"
        placeholder="10"
        required
        style={{
          width: "100px",
          height: "25px",
          marginLeft: 10,
          paddingLeft: "10px",
        }}
        onChange={(e: any) => setValue(Number(e.target.value))}
      />
      <button
        type="submit"
        style={{
          width: "150px",
          height: "33px",
          marginLeft: 10,
        }}
        onClick={() => transferGLD(toAddress, value)}
      >
        Send GLD
      </button>
    </form>
  );
}
