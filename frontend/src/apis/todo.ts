import axios from 'axios';
import type { Todo, CreateTodoDTO, UpdateTodoDTO } from '../types/todo';

const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: `${baseURL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const todoApi = {
  getTodos: async (): Promise<Todo[]> => {
    const response = await api.get<Todo[]>('/todos');
    return response.data;
  },
  
  getTodoById: async (id: number): Promise<Todo> => {
    const response = await api.get<Todo>(`/todos/${id}`);
    return response.data;
  },

  createTodo: async (data: CreateTodoDTO): Promise<Todo> => {
    const response = await api.post<Todo>('/todos', data);
    return response.data;
  },

  updateTodo: async (id: number, data: UpdateTodoDTO): Promise<Todo> => {
    const response = await api.put<Todo>(`/todos/${id}`, data);
    return response.data;
  },

  deleteTodo: async (id: number): Promise<void> => {
    await api.delete(`/todos/${id}`);
  },
};
