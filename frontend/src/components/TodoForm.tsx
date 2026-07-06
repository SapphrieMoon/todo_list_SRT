import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useCreateTodo } from '../queries/todo';

export function TodoForm() {
  const [title, setTitle] = useState('');
  const { mutate: createTodo, isPending } = useCreateTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    createTodo(
      { title: title.trim() },
      {
        onSuccess: () => setTitle(''),
      }
    );
  };

  return (
    <form className="flex gap-4 mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        className="flex-1 bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-slate-50 text-base outline-none transition-all focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 placeholder-slate-400"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={isPending}
      />
      <button 
        type="submit" 
        className="bg-purple-500 hover:bg-purple-600 disabled:opacity-50 disabled:hover:bg-purple-500 disabled:cursor-not-allowed text-white rounded-xl px-6 font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center shadow-lg shadow-purple-500/20" 
        disabled={!title.trim() || isPending}
      >
        <Plus size={24} />
      </button>
    </form>
  );
}
