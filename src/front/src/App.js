import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Index from "./pages/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
