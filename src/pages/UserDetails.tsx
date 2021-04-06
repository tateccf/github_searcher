import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserDetailsState } from '../reducers/userDetailsReducer';
import { fetchUserDetails } from '../actions';
import { Spinner } from '../components/UsersList/Spinner';
import { UserRepoList } from '../components/UserRepos/UserRepoList';

export interface UserDetailsProps {
  fetchUserDetails: Function;
  userDetailsState: UserDetailsState;
}

export const _UserDetails: React.FC<UserDetailsProps> = ({ fetchUserDetails, userDetailsState }) => {
  const { username } = useParams<{ username: string }>();

  const { user, fetchingUserDetail } = userDetailsState;

  useEffect(() => {
    fetchUserDetails(username);
  }, [username, fetchUserDetails]);

  if (fetchingUserDetail) return <Spinner />;
  if (!user) return null;

  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:{' '}
      {user.hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" />}
      <div className="card grid-2">
        <div className="all-center">
          <img src={user.avatar_url} className="round-img" style={{ width: '150px' }} alt="user profile" />
          <h1>{user.name}</h1>
          <p>Location: {user.location}</p>
        </div>
        <div>
          {user.bio && (
            <>
              <h3>Bio</h3>
              <p>{user.bio}</p>
            </>
          )}
          <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn-dark my-1">
            Visit GitHub Profile
          </a>
          <ul>
            <li>
              <strong>Username:</strong> {user.login}
            </li>
            <li>
              <strong>Company: </strong>
              {user.company}
            </li>
            <li>
              <strong>Website: </strong>
              <a target="_blank" rel="noreferrer" href={user.blog}>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {user.followers}</div>
        <div className="badge badge-success">Following: {user.following}</div>
        <div className="badge badge-light">Public repos: {user.public_repos}</div>
        <div className="badge badge-dark">Public Gists: {user.public_gists}</div>
      </div>
      <UserRepoList username={username} />
    </>
  );
};

const mapStateToProps = (state: UserDetailsState): UserDetailsState => {
  return state;
};

export const UserDetails = connect(mapStateToProps, { fetchUserDetails })(_UserDetails);
