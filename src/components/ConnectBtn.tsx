import React, {useMemo} from "react";
import styled from "styled-components";
import web3Helper from "../helpers/web3Helper";
import {formatUserName} from "../helpers/utils";
import {useSelectorTyped} from "../hooks/useSelectorTyped";
import {setUser} from "../store/action-creators/user";
import { useActions } from "../hooks/useActions";

const ConnectBtn: React.FC = () => {
  const { setUser } = useActions();
  const { user } = useSelectorTyped(state => state.user);

  const getUserName = useMemo(() => {
    if (user) {
      return formatUserName(user);
    }
  },[user])

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const account = await web3Helper.connect();
        setUser(account);
      } catch (e) {
        console.error("Error while connection MetaMask:", e);
      }
    } else {
      console.warn("MetaMask was not found in the browser.");
    }
  };

  return (
    <ConnectButton
      onClick={connectWallet}
    >
      {user ? getUserName : 'Connect Wallet'}
    </ConnectButton>
  );
}

export default ConnectBtn;

const ConnectButton = styled.div`
  width: 200px;
  padding: 12px 32px 12px 32px;
  border-radius: 8px;
  background: #08D899;
  box-shadow: 0px 8px 16px 0px #08D89933;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
    &:hover {
    cursor:pointer;
  }
  @media ${props => props.theme.media.mobile} {
    padding: 8px 24px 8px 24px;
  }
`;

