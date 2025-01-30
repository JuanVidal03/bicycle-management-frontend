import { TbTrashFilled, TbEdit  } from 'react-icons/tb';

const Actions = ({ id }: { id:number }): JSX.Element => {
  const handleDelete = () => {
    alert(`DELETED: ${id}`);
  };

  return (
    <div className='flex h-full items-center justify-center gap-4'>
      <TbTrashFilled onClick={handleDelete} className='text-4xl border border-dark-black rounded-lg p-2 cursor-pointer transition-all duration-300 hover:bg-blue-200'/>
      <TbEdit onClick={handleDelete} className='text-4xl border border-dark-black rounded-lg p-2 cursor-pointer transition-all duration-300 hover:bg-blue-200'/>
    </div>
  );
};

export default Actions;
