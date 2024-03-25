import { useAccount, useBalance, useDisconnect } from "wagmi";
import { SendGLDTransaction } from "./exam";
import { SendTransaction } from "./sendTranstions";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const result = useBalance({
    address,
  });

  const result1 = useBalance({
    address,
    token: "0x62fE10Daa9111DEcB19Ab5C310745e1C5ceA8D86",
  });

  return (
    <div>
      <div>ID: {address}</div>
      <div>Balance: {result.data?.symbol}</div>
      <div>Token: {result.data?.formatted}</div>
      <div>Balance: {result1.data?.symbol}</div>
      <div>Token: {result1.data?.formatted}</div>
      <button onClick={() => disconnect()}>Disconnect</button>
      <br />
      <br />
      <SendTransaction />
      <br />
      <SendGLDTransaction />
    </div>
  );
}
