const BicycleSatatus = ({ status }: { status: string; }): JSX.Element => {
  return (
    <div className="w-auto h-auto inline-block">
      <div className={`flex gap-2 items-center w-full h-auto m-2 rounded-full pl-4 ${status === 'DISPONIBLE' ? 'bg-green-200' : status === 'EN_MANTENIMIENTO' ? 'bg-orange-200' : 'bg-red-200'}`}>
        <span className={`w-4 h-4 rounded-full ${status === 'DISPONIBLE' ? 'bg-green-500' : status === 'EN_MANTENIMIENTO' ? 'bg-orange-500' : 'bg-red-500'}`}></span>
        <span className="font-semibold">{ status === 'DISPONIBLE' ? 'Disponible' : status === 'EN_MANTENIMIENTO' ? 'En mantenimiento' : 'Ocupada' }</span>
      </div>
    </div>
  );
};

export default BicycleSatatus;
