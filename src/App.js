import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StarMenu from "./components/pages/StartMenu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StarMenu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
