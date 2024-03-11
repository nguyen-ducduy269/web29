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

  const wagmigotchiContract = {
    address: IP,
  } as const;

  const result = useReadContracts({
    contracts: [
      {
        ...wagmigotchiContract,
        functionName: "ownerOf",
        args: [69],
      },
    ],
  });

  console.log("data", result);

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
      <br />
    </div>
  );
}
