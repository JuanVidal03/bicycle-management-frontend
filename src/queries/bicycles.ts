import axiosInstance from '../config/axiosInstance.ts';
import axios, { AxiosResponse } from 'axios';

export const findAll = async(): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance.get('/bicycles');
    
    if (response.status !== 200) {
      throw new Error('Error getting the bicycles.');
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    } else {
      throw new Error(`API ERROR: ${error}`);
    }
  }
};
