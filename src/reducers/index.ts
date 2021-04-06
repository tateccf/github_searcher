import { combineReducers } from 'redux';
import { userDetailsReducer, UserDetailsState } from './userDetailsReducer';
import { usersReducer, UsersState } from './usersReducer';
import { userReposState, userReposReducer } from './userReposReducer';

export interface StoreState {
  usersState: UsersState;
  userDetailsState: UserDetailsState;
  userReposState: userReposState;
}

export const reducers = combineReducers<StoreState>({
  usersState: usersReducer,
  userDetailsState: userDetailsReducer,
  userReposState: userReposReducer,
});
