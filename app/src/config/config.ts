import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import Botanix from "../../../public/botanixLogo.svg";

const botanixChain: Chain = {
  id: 3636,
  name: "Botanix Testnet",
  // network: "BTC",
  iconUrl: "/img/b2.png",
  nativeCurrency: {
    decimals: 18,
    name: "Botanix Testnet",
    symbol: "BTC",
  },
  rpcUrls: {
    default: {
      http: ["https://node.botanixlabs.dev"],
    },
    public: {
      http: ["https://node.botanixlabs.dev"],
    },
  },
};

export const wagmiConfig = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: "ee56c353983496c87480ff2ae841a933",
  chains: [ botanixChain],
});
