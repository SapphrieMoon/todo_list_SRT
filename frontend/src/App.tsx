import { useTodos } from './queries/todo';
import { TodoForm } from './components/TodoForm';
import { TodoItem } from './components/TodoItem';
import './App.css';

function App() {
  const { data: todos, isLoading, isError } = useTodos();

  return (
    <main className="max-w-xl mx-auto px-6 py-12">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-6 text-center">
          ToDo
        </h1>

        <TodoForm />

        <div className="flex flex-col gap-4">
          {isLoading && (
            <div className="text-center py-12 text-slate-400 text-lg">Loading tasks...</div>
          )}

          {isError && (
            <div className="text-center py-12 text-red-500 text-lg">
              Failed to load tasks. Please try again.
            </div>
          )}

          {!isLoading && !isError && todos?.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-lg">
              You're all caught up! Enjoy your day ✨
            </div>
          )}

          {todos?.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default App;
