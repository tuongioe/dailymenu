import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ROUTES } from "./constants/routes";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
