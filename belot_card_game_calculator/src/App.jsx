import { useState } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Heder.jsx";
import ScoreBoard from "./components/ScoreBoard.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<ScoreBoard />} />
      </Routes>
    </>
  );
}

export default App;
