import { useWriteContract } from "wagmi";
import { abi } from "./abi";

export function SendGLDTransaction() {
  const { writeContract } = useWriteContract();

  return (
    <button
      onClick={() =>
        writeContract({
          abi,
          address: "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D",
          functionName: "transferFrom",
          args: [
            "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D",
            "0xD989e5468d0209cbcE14248fF6357Efa80aEb881",
            10,
          ],
        })
      }
    >
      Transfer
    </button>
  );
}
