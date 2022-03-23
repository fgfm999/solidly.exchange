import { InjectedConnector } from "@web3-react/injected-connector";
import { NetworkConnector } from "@web3-react/network-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  250: "https://rpc.ftm.tools",
  4002: "https://rpc.testnet.fantom.network"
};

let obj = {}
if(process.env.NEXT_PUBLIC_CHAINID == 250) {
  obj = { 250: RPC_URLS[250] }
} else {
  obj = { 4002: RPC_URLS[4002] }
}

export const network = new NetworkConnector({ urls: obj });

export const injected = new InjectedConnector({
  supportedChainIds: [parseInt(process.env.NEXT_PUBLIC_CHAINID)]
});
