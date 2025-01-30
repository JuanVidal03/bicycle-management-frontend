import BicyclesTable from './components/BicyclesTable.tsx';

const Index = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='font-bold text-4xl'>Bicicletas registradas</h1>
      <BicyclesTable/>
    </div>
  );
};

export default Index;
