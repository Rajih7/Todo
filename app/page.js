"use client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Todolist } from "./Components/Todolist";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store";
import { PersistGate } from "redux-persist/integration/react";
import { Auth } from "./Firebase config/Auth";

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Routes>
            <Route
              path="/login"
              element={<Auth />}
            />
            <Route
              path="/"
              element={
                <main className="bg-gradient-to-r from-cyan-200 to-blue-200 ">
                  <Navigate to="/login" replace /> <Auth/>
                  <h1 className="text-2xl flex justify-center p-3 font-extrabold font-serif">
                    TODO LIST
                  </h1>
                  <Todolist />
                </main>
              }
            />
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}
