import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUserRepos } from '../../actions';
import { StoreState } from '../../reducers';
import { userReposState } from '../../reducers/userReposReducer';
import { Spinner } from '../UsersList/Spinner';
import { UserRepoItem } from './UserRepoItem';

export interface UserRepoListProps {
  fetchUserRepos: Function;
  userReposState: userReposState;
  username: string;
}

const _UserRepoList: React.FC<UserRepoListProps> = ({ userReposState, fetchUserRepos, username }) => {
  const { repos, loading } = userReposState;

  useEffect(() => {
    fetchUserRepos(username);
  }, [username, fetchUserRepos]);

  function renderUserRepos(): React.ReactElement[] {
    return repos.map(repo => <UserRepoItem key={repo.id} repo={repo} />);
  }

  if (loading) return <Spinner />;

  return (
    <div className="container card">
      <h2>Last repositories</h2>
      <ul>{renderUserRepos()}</ul>
    </div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return state;
};

export const UserRepoList = connect(mapStateToProps, { fetchUserRepos })(_UserRepoList);
