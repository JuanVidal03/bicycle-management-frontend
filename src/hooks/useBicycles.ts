import { useQuery } from '@tanstack/react-query';
import { findAll } from '../queries/bicycles.ts';

export const useFindAllBicycles = () => {
  return useQuery({
    queryKey: ['bicycles'],
    queryFn: findAll,
  });
};
