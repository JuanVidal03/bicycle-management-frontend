import { useState } from 'react';
import CreateBicycleContent from './CreateBicycleContent.tsx';
import BlackButton from '../../Shared/BlackButton/Index.tsx';
import { TbPlus } from 'react-icons/tb';

const CreateBicycleModalButton = (): JSX.Element => {
  const [isActiveCreateModal, setIsActiveCreateModal] = useState<boolean>(false);

  return (
    <div>
      <BlackButton
        text='Crear Bicicleta'
        onClick={() => setIsActiveCreateModal(true)}
        icon={<TbPlus className='text-2xl'/>}
      />
      <div className={`${isActiveCreateModal ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300 fixed z-10 top-0 left-0 w-screen h-screen bg-dark-gradient backdrop-blur-md flex justify-center items-center`}>
        <CreateBicycleContent
          onClose={() => setIsActiveCreateModal(false)}
          isModalActive={isActiveCreateModal}
        />
      </div>
    </div>
  );
};

export default CreateBicycleModalButton;
