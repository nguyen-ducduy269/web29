import { createConfig, http } from "wagmi";
import { avalancheFuji } from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = "0xBda61E0D09776FcE75cDF3971ED6213F51000b7D";

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

export const config = createConfig({
  chains: [avalancheFuji],
  connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
  transports: {
    [avalancheFuji.id]: http(),
  },
});
