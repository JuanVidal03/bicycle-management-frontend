import BicyclesTable from './components/BicyclesTable.tsx';
import CreateBicycleModalButton from './components/CreateBicycleModalButton.tsx';
import useDocumentTitle from '../../hooks/useDocumentTitle.ts';

const Index = () => {
  useDocumentTitle('Bicicletas');

  return (
    <div className='flex flex-col gap-6'>
      <div className='w-full flex items-center justify-between'>
        <h1 className='font-bold text-4xl'>Bicicletas registradas</h1>
        <CreateBicycleModalButton/>
      </div>
      <BicyclesTable/>
    </div>
  );
};

export default Index;
