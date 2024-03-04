import { erc20Abi } from "viem";
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

  const result = useReadContracts({
    contracts: [
      {
        address: "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D",
        abi: erc20Abi,
        functionName: "balanceOf",
      },
    ],
  });

  console.log(result);

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
