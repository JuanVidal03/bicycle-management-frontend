import { ChildrenProps } from './interface/ChildrenProps.interface.ts';
import Sidebar from './components/Sidebar.tsx';

const Index = ({ children }: ChildrenProps): JSX.Element => {
  return (
    <div className='flex grow'>
      <Sidebar/>
      <main className='overflow-y-auto w-full h-screen p-8 bg-gray-background'>
        { children }
      </main>
    </div>
  );
};

export default Index;
