import { UserRepo } from '../../actions';

export interface UserRepoItemProps {
  repo: UserRepo;
}

export const UserRepoItem: React.FC<UserRepoItemProps> = ({ repo }) => {
  const { name, html_url } = repo;
  return (
    <li>
      <a target="_blank" rel="noreferrer" href={html_url}>
        {name}
      </a>
    </li>
  );
};
