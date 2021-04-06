import { ActionTypes, UserRepo, Action } from '../actions';

export interface userReposState {
  repos: UserRepo[];
  loading: boolean;
}

const initialState: userReposState = {
  repos: [],
  loading: false,
};

export const userReposReducer = (state: userReposState = initialState, action: Action): userReposState => {
  switch (action.type) {
    case ActionTypes.fetchUserRepos:
      return { ...state, repos: action.payload, loading: false };
    case ActionTypes.fetchingUserRepos:
      return { ...state, loading: true };
    default:
      return state;
  }
};
