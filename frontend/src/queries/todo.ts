import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { todoApi } from '../apis/todo';
import type { CreateTodoDTO, UpdateTodoDTO } from '../types/todo';

export const todoKeys = {
  all: ['todos'] as const,
  detail: (id: number) => [...todoKeys.all, id] as const,
};

export const useTodos = () => {
  return useQuery({
    queryKey: todoKeys.all,
    queryFn: todoApi.getTodos,
  });
};

export const useTodo = (id: number) => {
  return useQuery({
    queryKey: todoKeys.detail(id),
    queryFn: () => todoApi.getTodoById(id),
    enabled: !!id,
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateTodoDTO) => todoApi.createTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdateTodoDTO }) => 
      todoApi.updateTodo(id, data),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all });
      queryClient.invalidateQueries({ queryKey: todoKeys.detail(variables.id) });
    },
  });
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id: number) => todoApi.deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
};
