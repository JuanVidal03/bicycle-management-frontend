import { TbBackground } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm.tsx';
import useDocumentTitle from '../../../hooks/useDocumentTitle.ts';

const Index = (): JSX.Element => {
  useDocumentTitle('Iniciar sesion');

  return (
    <div className="h-screen w-full p-4 flex gap-4 font-default bg-[#020001] text-white">
      <div className='w-full h-full rounded-xl p-10 overflow-hidden bg-[url(./assets/auth-background.jpg)] bg-no-repeat bg-cover flex items-end'>
        <div className="w-full ">
          <h1 className="text-7xl font-title max-w-[550px]">Descubre el mundo sobre dos ruedas</h1>
          <p className="mt-4 max-w-[350px]">Las mejores aventuras comienzan con un solo empuje. Confía en el camino, disfruta el viaje.</p>
        </div>
      </div>

      <div className='w-full h-full flex justify-center py-8'>
        <div className='w-full h-full max-w-[50%] flex flex-col items-center justify-between'>
          <div className='flex items-center gap-4'>
            <TbBackground className='text-3xl'/>
            <span>{ import.meta.env.VITE_COMPANY_NAME }</span>
          </div>

          <div className="w-full">
            <div className='mb-16'>
              <h5 className="text-4xl font-title text-center">Bienvenido de vuelta</h5>
              <p className="text-center">Ingresa tu email y pasword para acceder</p>
            </div>

            <LoginForm/>
          </div>

          <div>
            <p>No tienes una cuenta? <Link className='font-bold' to='/register'>Resgistrarme</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
