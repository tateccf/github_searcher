import { Link } from 'react-router-dom';

export interface User {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export interface UserListItemProps {
  user: User;
}

export const UsersListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <div className="card text-center">
      <img src={user.avatar_url} alt={user.login} className="round-img" style={{ width: '60px' }} />

      <h3>{user.login}</h3>

      <div>
        <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};
