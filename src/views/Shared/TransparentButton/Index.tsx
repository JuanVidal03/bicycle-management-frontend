import { BlackButtonProps } from './interface/Props.interface.ts';

const TransparentButton = ({ text, icon=null, onClick=undefined, width='w-auto', type='button', isLoading=false }: BlackButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`bg-transparent border border-dark-black ${width} text-dark-black px-5 py-3 rounded-lg cursor-pointer flex justify-between items-center gap-2 ${isLoading && 'opacity-50'}`}
    >
      <span>{ text }</span>
      { isLoading ? <div className="w-5 h-5 border-2 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div> : icon }
    </button>
  );
};

export default TransparentButton;
