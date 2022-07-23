import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage/CartPage";
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
          <Route path="/cart" element={<CartPage />} />
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

// Stwórz komponent CartPage
// stan products
// fetch na 5 produktów, dane do stanu products
// w komponencie tworzycie funkcję calculateTotal, która będzie zliczała cenę wszystkich produktów w koszyku
// JSX:
// products.map, wyświetlanie CartProductTile w pętli
// Typography z ceną łączną wszystkich produktów w koszyku
// Button text Order
