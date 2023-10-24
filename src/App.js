import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowMore from "./components/ShowMore";
import TextHide from "./components/TextHide";
import SkrollBar from "./components/SkrollBar";
import Pagination from "./components/Pagination";
import Rating from "./components/Rating";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShowMore />} />
          <Route path="/second" element={<TextHide />} />
          <Route path="/third" element={<SkrollBar />} />
          <Route path="/fourth" element={<Pagination />} />
          <Route path="/fifth" element={<Rating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
