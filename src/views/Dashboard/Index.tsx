import useDocumentTitle from '../../hooks/useDocumentTitle.ts';

const Index = (): JSX.Element => {
  useDocumentTitle('Dashboard');

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default Index;
