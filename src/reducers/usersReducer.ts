import { ActionTypes, User, Action } from '../actions';

export interface UsersState {
  users: User[];
  loading: boolean;
}
const initialState: UsersState = {
  users: [],
  loading: false,
};

export const usersReducer = (state: UsersState = initialState, action: Action): { users: User[]; loading: boolean } => {
  switch (action.type) {
    case ActionTypes.setLoading:
      return { ...state, loading: true };
    case ActionTypes.fetchUsers:
      return { ...state, users: action.payload, loading: false };
    case ActionTypes.clearUsersList:
      return { ...state, users: [] };
    default:
      return state;
  }
};
