import { SearchForm } from '../components/SearchForm/SearchForm';
import { UsersList } from '../components/UsersList/UsersList';

export interface HomePageProps {}

export const Homepage: React.FC<HomePageProps> = () => {
  return (
    <>
      <SearchForm />
      <UsersList />
    </>
  );
};
