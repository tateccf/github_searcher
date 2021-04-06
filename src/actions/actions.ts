import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface User {
  name: string;
  id: number;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  login: string;
  html_url: string;
  following: number;
  followers: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
  company: string;
}

export interface UserDetails {
  name: string;
  avatar_url: string;
  location: string;
  bio: string;
  blog: string;
  login: string;
  html_url: string;
  following: number;
  followers: number;
  public_repos: number;
  public_gists: number;
  hireable: boolean;
  company: string;
}

export interface UserRepo {
  id: number;
  name: string;
  html_url: string;
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

export interface SetLoadingAction {
  type: ActionTypes.setLoading;
}

export interface FetchUserDetails {
  type: ActionTypes.fetchUserDetails;
  payload: UserDetails;
}

export interface FetchingUserDetails {
  type: ActionTypes.fetchingUserDetails;
}

export interface ClearUsersList {
  type: ActionTypes.clearUsersList;
}

export interface FetchUserRepos {
  type: ActionTypes.fetchUserRepos;
  payload: UserRepo[];
}

export interface FetchingUserRepors {
  type: ActionTypes.fetchingUserRepos;
}

export const fetchUsers = (searchInput: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading());
    try {
      const response = await axios.get<{ items: User[] }>(
        `https://api.github.com/search/users?q=${searchInput}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
      );

      dispatch<FetchUsersAction>({
        type: ActionTypes.fetchUsers,
        payload: response.data.items,
      });
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const fetchUserDetails = (username: string) => async (dispatch: Dispatch) => {
  dispatch(fetchingUserDetails());

  try {
    const response = await axios.get<UserDetails>(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    dispatch<FetchUserDetails>({
      type: ActionTypes.fetchUserDetails,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const setLoading = () => {
  return {
    type: ActionTypes.setLoading,
  };
};

export const fetchingUserDetails = () => {
  return {
    type: ActionTypes.fetchingUserDetails,
  };
};

export const clearUsersList = () => {
  return {
    type: ActionTypes.clearUsersList,
  };
};

export const fetchingUserRepos = () => {
  return {
    type: ActionTypes.fetchingUserRepos,
  };
};

export const fetchUserRepos = (username: string) => async (dispatch: Dispatch) => {
  dispatch(fetchingUserRepos());

  try {
    const response = await axios.get<UserRepo[]>(
      `https://api.github.com/users/${username}/repos?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    dispatch<FetchUserRepos>({
      type: ActionTypes.fetchUserRepos,
      payload: response.data,
    });
  } catch (err) {
    console.log(err.message);
  }
};
