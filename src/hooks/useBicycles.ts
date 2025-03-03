import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { findAll, createBicycle } from '../queries/bicycles.ts';
import { BicycleSchema } from '../views/Bicycles/interface/Bicycle.interface.ts';

interface AllBicyclesResponse {
  message: string;
  statusCode: number;
  data: BicycleSchema[];
}

export const useFindAllBicycles = () => {
  return useQuery({
    queryKey: ['bicycles'],
    queryFn: findAll,
  });
};

export const useCreateBicycle = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBicycle,
    onSuccess: (createBicycleResponse) => {
      const newBicycle = createBicycleResponse?.data;
      queryClient.setQueryData(['bicycles'], (oldData: AllBicyclesResponse) => {
        const oldBicycles = oldData.data;
        if (!oldData) {
          return { data: [newBicycle] };
        }

        return {
          ...oldData,
          data: [newBicycle, ...oldBicycles]
        };
      });
    },
    onError: (error) => {
      console.log(error);
      throw new Error(error.message);
    },
  });
};
