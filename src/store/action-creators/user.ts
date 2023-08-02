import {Dispatch} from "redux";
import {UserAction, UserActionTypes} from "../../types/user";

export const setUser = (user: string):any => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_USER, payload: user});
  }
}

export const setNetwork = (chainId: any):any => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({type: UserActionTypes.SET_NETWORK, payload: Number(chainId) });
  }
}
