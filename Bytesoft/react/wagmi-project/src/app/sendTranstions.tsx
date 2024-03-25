import * as React from "react";
import { parseEther } from "viem";
import {
  useAccount,
  useSendTransaction,
  useWaitForTransactionReceipt,
  type BaseError,
} from "wagmi";

export function SendTransaction() {
  const { address } = useAccount();
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    sendTransaction({ to, value: parseEther(value) });
  }

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form onSubmit={submit}>
      <input
        name="address"
        placeholder="0x......"
        required
        style={{ width: "350px", height: "25px", paddingLeft: "10px" }}
      />
      <input
        name="value"
        placeholder="0.05"
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
        {isPending ? "Confirming..." : "Send"}
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
