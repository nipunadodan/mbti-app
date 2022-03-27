import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Comparison from "./components/comparison/Comparison";
import FindThatType from "./components/findtype/FindThatType";
import {ThemeProvider} from "./components/common/ThemeContext";

function App() {
  return (
      <ThemeProvider>
          <BrowserRouter basename={'mbti'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compare" element={<Comparison />} />
              <Route path="/find" element={<FindThatType />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
