import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, clearUsersList } from '../../actions';
import { StoreState } from '../../reducers';
import { UsersState } from '../../reducers/usersReducer';

export interface SearchFormProps {
  fetchUsers: Function;
  usersState: UsersState;
  clearUsersList: Function;
}

const _SearchForm: React.FC<SearchFormProps> = ({ fetchUsers, usersState, clearUsersList }) => {
  const [textInput, setTextInput] = useState('');

  const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const input = e.currentTarget.value;

    setTextInput(input);
  };

  const onFormSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    fetchUsers(textInput);
  };

  return (
    <>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          autoFocus
          type="text"
          name="text"
          placeholder="Search GitHub users..."
          value={textInput}
          onChange={onInputChange}
        />
        <button className="btn btn-dark btn-block">Search</button>
      </form>
      {usersState.users.length > 0 && (
        <button onClick={() => clearUsersList()} className="btn btn-light btn-block">
          Clear
        </button>
      )}
    </>
  );
};

const mapStateToProps = (state: StoreState) => {
  return state;
};

export const SearchForm = connect(mapStateToProps, { fetchUsers, clearUsersList })(_SearchForm);
