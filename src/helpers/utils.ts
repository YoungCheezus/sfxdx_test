import {NETWORKS} from "../constants/network";

export const formatUserName = (user: string) => {
  return `${user.slice(0, 10)}...${user.slice(38)}`
}

export const getNetworkName = (chainId: number) => {
  return NETWORKS.find(chain => chain.id === chainId )?.name
}