import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { TbBrandGoogleFilled, TbEye, TbEyeClosed } from 'react-icons/tb';

type Inputs = {
  email: string,
  password: string,
};

const LoginForm = (): JSX.Element  => {
  const [isPasswordHidden, setIsPasswordHidden] = useState<boolean>(true);
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const navigate = useNavigate();

  const handleLogin: SubmitHandler<Inputs> = async data => {
    console.log('---->', data);

    navigate('/dashboard');
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className='flex flex-col gap-6'
    >
      {/* Email */}
      <div className='flex flex-col gap-2'>
        <label>Email</label>
        <input
          type='email'
          placeholder='Ingresa tu email'
          className='bg-[#ffffff1f] outline-none focus:outline-none rounded-lg p-3'
          {
            ...register('email', {
              required: {
                value: true,
                message: 'Este campo es requerido.'
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Este campo debe ser un email'
              }
            })
          }
        />
        { errors.email && <span className='text-red-500'>{ errors.email.message }</span> }
      </div>
      {/* Password */}
      <div className='flex flex-col gap-2'>
        <label>Password</label>
        <div className='relative'>
          <input
            type={isPasswordHidden ? 'password' : 'text'}
            placeholder='Ingresa tu password'
            className='w-full bg-[#ffffff1f] outline-none focus:outline-none rounded-lg p-3'
            {
              ...register('password', {
                required: {
                  value: true,
                  message: 'Este campo es requerido.'
                }
              })
            }
          />
          {
            isPasswordHidden ? 
              <TbEye onClick={() => setIsPasswordHidden(false)} className='absolute text-2xl top-[30%] right-[2%] cursor-pointer z-10'/>
              :
              <TbEyeClosed onClick={() => setIsPasswordHidden(true)} className='absolute text-2xl top-[30%] right-[2%] cursor-pointer z-10'/>
          }
        </div>
        { errors.password && <span className='text-red-500'>{ errors.password.message }</span> }
      </div>
      
      <div className='flex flex-col gap-4'>
        <button
          type='submit'
          className='w-full bg-white rounded-lg p-2 text-black cursor-pointer font-semibold'
        >
          Ingresar
        </button>

        <button type='button' className='w-full border border-white cursor-pointer rounded-lg p-2 flex items-center justify-center gap-2 font-semibold'>
          <TbBrandGoogleFilled/>
          <span>Inicia sesion con Google</span>
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
