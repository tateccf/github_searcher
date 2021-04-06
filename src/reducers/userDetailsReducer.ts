import { ActionTypes, UserDetails, Action } from '../actions';

export interface UserDetailsState {
  user: UserDetails | null;
  fetchingUserDetail: boolean;
}

const initialState: UserDetailsState = {
  user: null,
  fetchingUserDetail: false,
};

export const userDetailsReducer = (state: UserDetailsState = initialState, action: Action): UserDetailsState => {
  switch (action.type) {
    case ActionTypes.fetchingUserDetails:
      return { ...state, fetchingUserDetail: true };

    case ActionTypes.fetchUserDetails:
      return { ...state, user: action.payload, fetchingUserDetail: false };
    default:
      return state;
  }
};
