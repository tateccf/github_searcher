import spinner from './spinner.gif';

export const Spinner: React.FC = () => {
  return (
    <>
      <img
        src={spinner}
        alt="loading spinner"
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </>
  );
};
