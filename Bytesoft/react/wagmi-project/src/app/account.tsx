import { Index } from "@/app/index";
import { useAccount, useDisconnect, useEnsAvatar, useEnsName } from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && (
        <div>
          <div>Wallet ID: {ensName ? `${ensName} (${address})` : address}</div>
        </div>
      )}
      <button onClick={() => disconnect()}>Disconnect</button>
      <br />
      <Index />
      <br />
    </div>
  );
}
