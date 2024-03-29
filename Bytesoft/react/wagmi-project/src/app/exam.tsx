import React from "react";
import { parseEther } from "viem";
import {
  useWaitForTransactionReceipt,
  useWriteContract,
  type BaseError,
} from "wagmi";
import { abi } from "./abi";

export function SendGLDTransaction() {
  const { data: hash, error, isPending, writeContract } = useWriteContract();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("receive-address") as `0x${string}`;
    const toToken = formData.get("receive-token-address") as `0x${string}`;
    const value = formData.get("value") as string;

    writeContract({
      address: toToken,
      abi,
      functionName: "transfer",
      args: [to, parseEther(value)],
    });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form onSubmit={submit}>
      <input
        name="receive-address"
        placeholder="receive address"
        required
        style={{ width: "100px", height: "25px", paddingLeft: "10px" }}
      />
      <input
        name="receive-token-address"
        placeholder="receive token address"
        required
        style={{
          width: "100px",
          height: "25px",
          paddingLeft: "10px",
          marginLeft: 10,
        }}
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
      />
      <button
        disabled={isPending}
        type="submit"
        style={{
          width: "150px",
          height: "33px",
          marginLeft: 10,
        }}
      >
        {isPending ? "Confirming..." : "Send GLD"}
      </button>
      {hash && <div>Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>}
      {isConfirmed && <div>Transaction confirmed.</div>}
      {error && (
        <div>Error: {(error as BaseError).shortMessage || error.message}</div>
      )}
    </form>
  );
}
