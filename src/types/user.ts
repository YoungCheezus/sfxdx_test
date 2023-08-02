export enum UserActionTypes {
  SET_USER = 'SET_USER',
  SET_NETWORK = 'SET_NETWORK'
}

export interface UserState {
  user?: string;
  chainId?: number;
}

export interface UserAction {
  type: string;
  payload?: any;
}

export interface SetUserAction {
  type: UserActionTypes.SET_USER;
  payload: string;
}

