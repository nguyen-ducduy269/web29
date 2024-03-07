import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useReadContracts,
} from "wagmi";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  const IP = "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D";

  const result = useReadContracts({
    allowFailure: false,
    contracts: [
      {
        address: IP,
      },
    ],
  });
  console.log("result", result);

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && (
        <div>
          <div>Wallet ID: {ensName ? `${ensName} (${address})` : address}</div>
          <div>Wallet Value: </div>
        </div>
      )}
      <button onClick={() => disconnect()}>Disconnect</button>
    </div>
  );
}
