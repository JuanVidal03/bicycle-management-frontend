/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry, ColDef, ICellRendererParams } from 'ag-grid-community';
import { useFindAllBicycles } from '../../../hooks/useBicycles.ts';
import Loader from '../../Shared/Loader/Index.tsx';
import { BicycleSchema } from '../interface/Bicycle.interface.ts';
import { toast } from 'react-hot-toast';
import Actions from './Actions.tsx';
import BicycleSatatus from './BicycleSatatus.tsx';

ModuleRegistry.registerModules([AllCommunityModule]);

const BicyclesTable = (): JSX.Element => {
  const { data: bicycles, isLoading, isFetching, isError, error } = useFindAllBicycles();

  const cellStyles = {
    display: 'flex',
    alignItems: 'center',
  };

  const [colDefs, setColDefs] = useState<ColDef<BicycleSchema>[]>([
    { headerName: 'ID', field: 'id', flex: 1, filter: true, cellStyle: cellStyles },
    { headerName: 'Marca', field: 'marca', flex: 2, filter: true, cellStyle: cellStyles },
    { headerName: 'Color', field: 'color', flex: 2, filter: true, cellStyle: cellStyles },
    { headerName: 'Estado', field: 'estado', flex: 2, filter: true, cellStyle: cellStyles, cellRenderer: (params: ICellRendererParams) => <BicycleSatatus status={params?.data.estado}/> },
    { headerName: 'Precio Alquiler', field: 'precio', flex: 2, filter: true, cellStyle: cellStyles, cellRenderer: (params: ICellRendererParams) => <p>${ params?.data?.precio.toLocaleString() } COP</p> },
    { headerName: 'Actions', field: 'precio', flex: 1
      , filter: true, cellStyle: cellStyles, cellRenderer: (params: ICellRendererParams) => <Actions id={params?.data?.id}/> }
  ]);

  useEffect(() => {
    if (isError) {
      toast.error(error?.message);
    }
    return;
  }, [isError, error]);

  const paginationSelector = [10, 20, 30, 50];

  return (
    <div className='max-h-[85vh]'>
      {
        (isLoading || isFetching) ?
          <div className='w-full flex items-center justify-center'>
            <Loader/>
          </div>
          : 
          <AgGridReact
            rowData={bicycles?.data}
            columnDefs={colDefs}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={paginationSelector}
            detailRowAutoHeight={true}
            domLayout='autoHeight'
            rowHeight={60}
          />
      }
    </div>
  );
};

export default BicyclesTable;
