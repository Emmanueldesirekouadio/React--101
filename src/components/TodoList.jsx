import React from "react";
import { useState } from "react";
// import Product from "./Product";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTodos([...todos, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
      <div className="max-w-md mx-auto bg-slate-50 p-4 rounded-xl">
        <h1 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          My Todo App
        </h1>

        <form onSubmit={addTodo} className="flex gap-2 mb-8">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Ajouter une tâche..."
            className="flex-1 px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-transparent transition-all"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-slate-800 text-white rounded-xl font-medium hover:bg-slate-700 active:scale-95 transition-all shadow-sm"
          >
            Ajouter
          </button>
        </form>

        <div className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-slate-400 py-8">
              Aucune tâche pour le moment 📝
            </p>
          ) : (
            todos.map((todo, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-100 group hover:shadow-md transition-all"
              >
                <button
                  onClick={() => toggleTodo(index)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${todo.completed
                    ? "bg-emerald-500 border-emerald-500 text-white"
                    : "border-slate-300 hover:border-slate-400"
                    }`}
                >
                  {todo.completed && (
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>

                <span
                  className={`flex-1 text-slate-700 transition-all ${todo.completed ? "line-through text-slate-400" : ""
                    }`}
                >
                  {todo.text}
                </span>

                <button
                  onClick={() => deleteTodo(index)}
                  className="opacity-0 group-hover:opacity-100 text-slate-400 hover:text-red-500 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {todos.length > 0 && (
          <p className="text-center text-slate-400 text-sm mt-6">
            {todos.filter((t) => !t.completed).length} tâche(s) restante(s)
          </p>
        )}
      </div>
  );
}

export default TodoList;
