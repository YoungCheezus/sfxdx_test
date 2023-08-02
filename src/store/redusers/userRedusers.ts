import {UserAction, UserActionTypes, UserState} from "../../types/user";

const initialState: UserState = {
  user: "",
  chainId: undefined
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_USER:
      return { user: action.payload, chainId: state.chainId }
    case UserActionTypes.SET_NETWORK:
      return {user: state.user, chainId: action.payload }
    default:
      return state
  }
}