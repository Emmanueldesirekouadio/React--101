import React from "react";
import { useState } from "react";
// import Product from "./Product";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    e.preventDefault(); /// prevent the page from reloading
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 text-center">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
          My Todo App
        </h1>

        <form onSubmit={addTodo}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="border-4"
          />
          <button
            onClick={addTodo}
            className="bg-black text-white p-2 rounded-md ml-2"
          >
            click
          </button>
        </form>
      </div>

      <h2 className="text-2xl font-semibold text-center mt-6 underline">
        List of todo's
      </h2>
      <ul className="list-disc list-inside">
        {todos.map((todo, index) => (
          <li key={index}> {todo} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
