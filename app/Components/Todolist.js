import React, { useState } from "react";
import { addTodo, removeTodo, clearTodo, toggleTodo } from "../Redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserInfo } from "../Firebase config/useGetUserInfo";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase config/Firebase";
import "../globals.css";

export const Todolist = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.todoReducer.list);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { name, profilePhoto} = useGetUserInfo();
  const handleAddTodo = () => {
    if (title.trim() === "" || description.trim() === "" || /\d/.test(title)) {
      setErrorMessage(
        "Invalid input. Please provide a valid title and description."
      );
    } else {
      dispatch(addTodo(title, description));
      setTitle("");
      setDescription("");
      setErrorMessage("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex-col bg-gradient-to-r from-cyan-200 to-blue-200 min-h-screen w-screen flex items-center justify-center ">
      <div className="bg-slate-200 rounded-lg p-8 shadow-md w-96">
        {profilePhoto && (
          <div className=" mb-4 flex float-right">
            <div className="p-2">
              <p className="text-gray-800">{name}</p>
              <button
                onClick={signUserOut}
                className="text-sm text-red-600 hover:text-red-700 cursor-pointer"
              >
                Logout
              </button>
            </div>
            <img
              className="w-14 h-14 rounded-full"
              src={profilePhoto}
              alt="Profile"
            />
          </div>
        )}
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full rounded-lg pl-4 p-2 border-2 border-blue-500 focus:outline-none focus:border-blue-700 "
          value={title}
        />
        <textarea
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full mt-2 rounded-lg h-16 pl-4 p-2 border-2 border-blue-500 focus:outline-none focus:border-blue-700 "
          value={description}
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
        )}
        <button
          onClick={handleAddTodo}
          className="mt-4 w-full bg-blue-600 text-white rounded-lg p-2 font-medium hover:bg-blue-700 transition duration-300 "
        >
          ADD
        </button>
        <button
          onClick={() => dispatch(clearTodo())}
          className="text-red-500 mt-5 px-72 right-0"
        >
          Clear
        </button>
      </div>
      <div className="mt-8">
        {selector.map((item) => (
          <div
            key={item.id}
            className="bg-slate-200 rounded-lg p-4 w-96 shadow-md mb-2 flex justify-between items-center overflow-hidden"
          >
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100  rounded"
              checked={item.checked}
              onChange={() => handleToggleTodo(item.id)}
            />
            <div>
              <p
                className={`font-semibold text-2xl ${
                  item.checked ? "line-through text-gray-500" : "text-black"
                }`}
              >
                {item.data}
              </p>
              <p
                className={`whitespace-pre-line ${
                  item.checked ? "line-through text-gray-500" : "text-black"
                }`}
              >
                {item.description}
              </p>
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
