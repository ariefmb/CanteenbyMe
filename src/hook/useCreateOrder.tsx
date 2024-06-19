'use client';
import { createOrder } from '@/libs/apis';
import { TCreateOrder } from '@/libs/types';
import { useMutation } from '@tanstack/react-query';

export const useCreateOrder = () => {
  return useMutation({
    mutationKey: ['post.createOrder'],
    mutationFn: (data: TCreateOrder) => createOrder(data),
  });
};
