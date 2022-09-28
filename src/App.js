import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Comparison from "./components/comparison/Comparison";
import CogFuncs from "./components/findtype/CogFuncs";
import {ThemeProvider} from "./components/common/ThemeContext";
import Filter from "./components/filter/Filter";
import Oejts from "./components/oejts/Oejts";

function App() {
  return (
      <ThemeProvider>
          <BrowserRouter basename={'mbti'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compare" element={<Comparison />} />
              <Route path="/find" element={<CogFuncs />} />
              <Route path="/who" element={<Filter />} />
              <Route path="/oejts" element={<Oejts />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
