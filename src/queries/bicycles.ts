import axiosInstance from '../config/axiosInstance.ts';
import { AxiosResponse, isAxiosError } from 'axios';
import { BicycleSchema } from '../views/Bicycles/interface/Bicycle.interface.ts';
import { CreateBicycleFormInputs } from '../views/Bicycles/interface/CreateBicycleForm.interface.ts';

export const findAll = async(): Promise<AxiosResponse<BicycleSchema[]>> => {
  try {
    const response = await axiosInstance.get('/bicycles');
    
    if (response.status !== 200) {
      throw new Error('Error getting the bicycles.');
    }

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error(`API ERROR: ${error}`);
    }
  }
};

export const createBicycle = async(data: CreateBicycleFormInputs): Promise<AxiosResponse<BicycleSchema>> => {
  try {
    const response = await axiosInstance.post('/bicycles', data);

    if (response.status !== 201) {
      throw new Error('Error creating the bicycle.');
    }

    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      throw new Error(error.response?.data?.message);
    } else {
      throw new Error(`API ERROR: ${error}`);
    }
  }
};
