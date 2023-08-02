import Web3 from 'web3';
import {MetaMaskInpageProvider} from "@metamask/providers";

interface IWeb3 {
  web3: () => Web3;
  connect: () => Promise<string>;
  getCurrentAccount: () => Promise<string>;
  getNetworkId: () => Promise<bigint>;
  switchNetwork: (chainId: bigint) => Promise<any>
}

interface Error {
  code: number,
  message: string
}

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider
  }
}

const web3Helper: IWeb3 = {

  web3(): Web3 {
    if (window.ethereum) {
      return new Web3(window.ethereum);
    }
    return new Web3(window.ethereum);
  },

  async connect() {
    const accounts = await this.web3().eth.requestAccounts();
    return accounts[0]
  },

  async getCurrentAccount() {
    const accounts = await this.web3().eth.getAccounts();
    return accounts.length ? accounts[0] : "";
  },

  async getNetworkId() {
    return await this.web3().eth.net.getId();
  },


  async switchNetwork(chainId: bigint) {
    const currentNetworkId = await this.getNetworkId()
    if (currentNetworkId === chainId) {
      alert("Эта сеть уже выбрана")
      return;
    }
    try {
      await this.web3().currentProvider?.request({
        method: 'wallet_switchEthereumChain',
        params: [{chainId: this.web3().utils.toHex(chainId)}]
      });
    } catch (e) {
      console.log("error while change network", e)
    }

  }
};
export default web3Helper;