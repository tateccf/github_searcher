import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import { UsersState } from '../../reducers/usersReducer';

import { Spinner } from './Spinner';
import { UsersListItem } from './UsersListItem';

export interface UsersListProps {
  usersState: UsersState;
}

const _UsersList: React.FC<UsersListProps> = ({ usersState }) => {
  const { users, loading } = usersState;

  const renderUsersList = (): React.ReactElement[] => {
    return users.map(user => <UsersListItem user={user} key={user.id} />);
  };

  if (loading) return <Spinner />;
  return <div style={usersStyle}>{renderUsersList()}</div>;
};

const usersStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gridGap: '20px',
};

const mapStateToProps = (state: StoreState) => {
  return { usersState: state.usersState };
};

export const UsersList = connect(mapStateToProps)(_UsersList);
