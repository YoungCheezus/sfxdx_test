import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import ConnectBtn from "./ConnectBtn";
import web3Helper from "../helpers/web3Helper";
import {useSelectorTyped} from "../hooks/useSelectorTyped";
import { GOERLI_NETWORK } from "../constants/network";
import {useAppDispatch} from "../hooks/useAppDispatch";
import {setNetwork, setUser} from "../store/action-creators/user";
import {getNetworkName} from "../helpers/utils";


const Header = () => {
  const { chainId } = useSelectorTyped(state => state.user);
  const dispatch = useAppDispatch();

  if (window.ethereum) {
    window.ethereum.on('connect', (item: any) => {
      const chainId = item.chainId
      dispatch(setNetwork(Number(chainId)))
    });

    window.ethereum.on('chainChanged', (chain) => {
      dispatch(setNetwork(chain));
      alert(`Сеть в Metamask изменена: ${getNetworkName(Number(chain))}`)
    });

    window.ethereum.on('accountsChanged', (accounts: any) => {
      dispatch(setUser(accounts[0]))
      alert(`Подключен аккаунт: ${accounts[0]}`)
    });
  }

  const changeNetwork = async (event: React.MouseEvent<HTMLButtonElement>, chainId: number) => {
    return await web3Helper.switchNetwork(BigInt(chainId))
  }

  return (
    <AppHeader>
      <Logo />
      <StyledConnectBlock>
        <ConnectBtn />

        {
          chainId !== GOERLI_NETWORK.id &&
          <StyledBtn
            onClick={(e) => changeNetwork(e, GOERLI_NETWORK.id)}>
            Switch to Goerli
          </StyledBtn>

        }
      </StyledConnectBlock>

    </AppHeader>
  );
}
export default Header;

const AppHeader = styled.div`
border-bottom: 1px solid #CDD2DD;
height: 100px;
display: flex;
justify-content: center; 
align-items: center;
padding: 20px;
position: relative;
background: #FFFFFF1A;
@media ${props => props.theme.media.mobile} {
  flex-direction: column;
  gap: 10px;
  height: 130px;
}
`;

const StyledConnectBlock = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
align-items: center;
position: absolute;
right: 20px;
@media ${props => props.theme.media.mobile} {
  flex-direction: column;
  position: initial;
}
`;

const StyledBtn = styled.button`
color: #676767;
font-size: 12px;
font-weight: 600;
background: none;
border: none;
  &:hover {
    cursor:pointer;
  }
`;

