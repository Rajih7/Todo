'use client'

import { Todolist } from "./Components/Todolist";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="bg-gradient-to-r from-cyan-200 to-blue-200">
        <h1 className="text-2xl flex justify-center p-3 font-extrabold font-serif">TODO LIST</h1>
        <Todolist />
      </main>
    </Provider>
  );
}
