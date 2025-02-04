/* eslint-disable react-hooks/exhaustive-deps */
import { FaXmark } from 'react-icons/fa6';
import { CreateModalProps } from '../interface/CreateModalProps.interface.ts';
import { CreateBicycleFormInputs } from '../interface/CreateBicycleForm.interface.ts';
import { useForm, SubmitHandler  } from 'react-hook-form';
import BlackButton from '../../Shared/BlackButton/Index.tsx';
import TransparentButton from '../../Shared/TransparentButton/Index.tsx';
import { toast } from 'react-toastify';
import { useCreateBicycle } from '../../../hooks/useBicycles.ts';
import { useEffect } from 'react';

const CreateBicycleContent = ({ onClose, isModalActive }: CreateModalProps):JSX.Element => {
  const { handleSubmit, register, formState: { errors }, reset } = useForm<CreateBicycleFormInputs>();

  const { mutateAsync, isSuccess, isError, error, isPending } = useCreateBicycle();

  const handleCreateBicyle: SubmitHandler<CreateBicycleFormInputs> = async data => {
    data.precio = Number(data.precio);
    mutateAsync(data);
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success('Bicicleta creada correctamente!');
      reset();
      onClose?.();
    }
    return;
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      toast.error(error instanceof Error ? error.message : 'Ocurrió un error inesperado');
      reset();
      onClose?.();
    }
    return;
  }, [isError, error]);

  const handleCloseModal = (): void => {
    onClose?.();
    reset();
  };

  return (
    <div className={`${isModalActive ? 'translate-y-0' : '-translate-y-14'} transition-all duration-500 relative bg-white rounded-xl px-4 py-8 w-full max-w-[700px] h-auto max-h-[70%]`}>
      <div className='absolute top-3 right-3 bg-dark-black rounded-full w-8 h-8 flex justify-center items-center cursor-pointer'>
        <FaXmark onClick={handleCloseModal} className='text-white text-lg'/>
      </div>
      <h5 className='font-semibold text-dark-black text-2xl mb-3'>Crea una bicicleta</h5>
      <form onSubmit={handleSubmit(handleCreateBicyle)}>
        <div className='flex w-full gap-4'>
          {/* marca */}
          <div className='w-full flex flex-col gap-1'>
            <label className='font-semibold'>Marca de la bicicleta*</label>
            <input
              disabled={isPending}
              type="text"
              placeholder='Trek'
              className='border border-gray-500 rounded-lg p-2 focus:outline-none'
              {
                ...register('marca', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido.'
                  }
                })
              }
            />
            { errors.marca && <span className='text-red-500'>{ errors.marca.message }</span> }
          </div>

          {/* color */}
          <div className='w-full flex flex-col gap-1'>
            <label className='font-semibold'>Color de la bicicleta*</label>
            <input
              disabled={isPending}
              type="text"
              placeholder='Negro'
              className='border border-gray-500 rounded-lg p-2 focus:outline-none'
              {
                ...register('color', {
                  required: {
                    value: true,
                    message: 'Este campo es requerido.'
                  }
                })
              }
            />
            { errors.color && <span className='text-red-500'>{ errors.color.message }</span> }
          </div>
        </div>

        {/* precio */}
        <div className='w-full flex flex-col gap-1 my-4'>
          <label className='font-semibold'>Precio de alquiler*</label>
          <input
            disabled={isPending}
            type="text"
            placeholder='5000'
            className='border border-gray-500 rounded-lg p-2 focus:outline-none'
            {
              ...register('precio', {
                required: {
                  value: true,
                  message: 'Este campo es requerido.'
                },
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Solo valores numericos'
                }
              })
            }
          />
          { errors.precio && <span className='text-red-500'>{ errors.precio.message }</span> }
        </div>

        <div className='flex gap-8 justify-end'>
          <TransparentButton
            text='Cancelar'
            type='button'
            onClick={handleCloseModal}
          />
          <BlackButton
            text='Crear'
            type='submit'
            isLoading={isPending}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateBicycleContent;
