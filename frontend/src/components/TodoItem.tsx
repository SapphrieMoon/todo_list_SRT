import { Check, Trash2 } from 'lucide-react';
import type { Todo } from '../types/todo';
import { useUpdateTodo, useDeleteTodo } from '../queries/todo';

interface TodoItemProps {
  todo: Todo;
}

export function TodoItem({ todo }: TodoItemProps) {
  const { mutate: updateTodo, isPending: isUpdating } = useUpdateTodo();
  const { mutate: deleteTodo, isPending: isDeleting } = useDeleteTodo();

  const handleToggle = () => {
    updateTodo({
      id: todo.id,
      data: { completed: !todo.completed },
    });
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const isPending = isUpdating || isDeleting;

  return (
    <div className={`group flex items-center justify-between bg-white/5 border border-white/10 rounded-2xl px-5 py-4 transition-all hover:bg-white/10 hover:translate-x-1 hover:border-white/20 animate-slide-in ${isPending ? 'opacity-50' : 'opacity-100'}`}>
      <div className="flex items-center gap-4 flex-1 overflow-hidden cursor-pointer" onClick={handleToggle}>
        <div className="relative flex items-center justify-center">
          <div className={`w-6 h-6 border-2 rounded-full flex items-center justify-center transition-all ${todo.completed ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500' : 'border-slate-400'}`}>
            {todo.completed && <Check size={14} strokeWidth={3} />}
          </div>
        </div>
        <span className={`text-lg transition-all whitespace-nowrap overflow-hidden text-ellipsis ${todo.completed ? 'text-slate-400 line-through opacity-70' : ''}`}>
          {todo.title}
        </span>
      </div>
      
      <div className="flex gap-2 opacity-60 transition-opacity group-hover:opacity-100">
        <button 
          className="bg-transparent border-none text-slate-400 cursor-pointer p-2 rounded-lg flex items-center justify-center transition-all hover:bg-red-500/10 hover:text-red-500" 
          onClick={handleDelete}
          disabled={isPending}
          title="Delete Todo"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
