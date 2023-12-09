// app/page.js
"use client";

import { Todolist } from "./Components/Todolist";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <main className="bg-gradient-to-r from-cyan-200 to-blue-200">
          <h1 className="text-2xl flex justify-center p-3 font-extrabold font-serif">
            TODO LIST
          </h1>
          <Todolist />
        </main>
      </PersistGate>
    </Provider>
  );
}
