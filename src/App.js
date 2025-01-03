import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/index";
import SearchReasult from "./Pages/SearchReasult/index";
import Checkout from "./Pages/Checkout/index";
import Error from "../src/Pages/Error/index";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Pages/Product/Product";

function App() {
  return (
    <div className="text-3xl">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search" element={<SearchReasult />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
