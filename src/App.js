import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

function App() {
  const [isLogedin, setIsLogedIn] = useState(false);
  return (
    <>
      {isLogedin ? (
        <MainPage setLogedIn={setIsLogedIn} />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<SignupForm setIsLogedIn={setIsLogedIn} />}
          />
          <Route
            path="/login"
            element={<LoginForm setIsLogedIn={setIsLogedIn} />}
          />
        </Routes>
      )}
    </>
  );
}

export default App;
