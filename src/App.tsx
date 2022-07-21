import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/electronics"
            element={<ProductPage category="electronics" />}
          />
          <Route
            path="/jewelery"
            element={<ProductPage category="jewelery" />}
          />
          <Route
            path="/mans"
            element={<ProductPage category="men's clothing" />}
          />
          <Route
            path="/womans"
            element={<ProductPage category="women's clothing" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Link dla napisu SDA MARKET
// Linki dla buttonów w navbarze
// Linki dla kafelków w CategoryMenu
// <Link>

// Stwórz komponent CartProductTile
// w propsach będzie przyjmował 1 obiekt typu Product
// JSX:
// Card
// W Card:
// Obrazek (product.image)
// Typography product.title
// Typography product.price
// Button text: Remove from cart