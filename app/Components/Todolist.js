import React, { useState } from "react";
import { addTodo, removeTodo, clearTodo } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import "../globals.css";

export const Todolist = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const selector = useSelector((state) => state.todoReducer.list);

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="flex-col bg-gradient-to-r from-cyan-200 to-blue-200 min-h-screen flex items-center justify-center ">
      <div className="bg-slate-200 rounded-lg p-8 shadow-md w-96">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here..."
          className="w-full rounded-lg pl-4 p-2 border-2 border-blue-500 focus:outline-none focus:border-blue-700 "
          value={input}
        />
        <button
          onClick={handleAddTodo}
          className="mt-4 w-full bg-blue-600 text-white rounded-lg p-2 font-medium hover:bg-blue-700 transition duration-300 "
        >
          ADD
        </button>
        <button onClick={() => dispatch(clearTodo())} className="text-red-500 mt-5 px-72 right-0">Clear</button>
      </div>
      <div className="mt-8">
        {selector.map((item) => (
          <div
            key={item.id}
            className="bg-slate-200 rounded-lg p-4 w-96 shadow-md mb-2 flex justify-between items-center "
          >
            <div>
              <p className="font-semibold text-2xl">{item.data}</p>
            </div>
            <button
              onClick={() => dispatch(removeTodo(item.id))}
              className="text-black text-2xl ml-4 hover:text-red-500"
            >
              🗑
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
