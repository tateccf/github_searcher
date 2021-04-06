import {
  ClearUsersList,
  FetchingUserDetails,
  FetchingUserRepors,
  FetchUserDetails,
  FetchUserRepos,
  FetchUsersAction,
  SetLoadingAction,
} from './actions';

export enum ActionTypes {
  fetchUsers,
  setLoading,
  fetchUserDetails,
  fetchingUserDetails,
  clearUsersList,
  fetchUserRepos,
  fetchingUserRepos,
}

export type Action =
  | FetchUsersAction
  | SetLoadingAction
  | FetchUserDetails
  | FetchingUserDetails
  | ClearUsersList
  | FetchUserRepos
  | FetchingUserRepors;
