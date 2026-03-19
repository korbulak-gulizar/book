import React from "react";
import "./styles/app.scss";

import Home from "./pages/Home";
import Index from "./pages/Index";
import Interest from "./pages/Interest";
import Readinglist from "./pages/Readinglist";
import ReadingTracer from "./pages/ReadingTracer";
import Bookrev from "./pages/Bookrev";
import Myfavorite from "./pages/MyFavorite";
import Reading from "./pages/Reading";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Index />} />
            <Route path="/interest" element={<Interest />} />
            <Route path="/readinglist" element={<Readinglist />} />
            <Route path="/readingtracer" element={<ReadingTracer />} />
            <Route path="/bookrev" element={<Bookrev />} />
            <Route path="/myfavorite" element={<Myfavorite />} />
            <Route path="/reading" element={<Reading />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
