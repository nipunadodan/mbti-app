import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Comparison from "./components/comparison/Comparison";
import FindThatType from "./components/findtype/FindThatType";
import {ThemeProvider} from "./components/common/ThemeContext";
import WhoIsHere from "./components/whoishere/WhoIsHere";
import Oejts from "./components/oejts/Oejts";

function App() {
  return (
      <ThemeProvider>
          <BrowserRouter basename={'mbti'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/compare" element={<Comparison />} />
              <Route path="/find" element={<FindThatType />} />
              <Route path="/who" element={<WhoIsHere />} />
              <Route path="/oejts" element={<Oejts />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
