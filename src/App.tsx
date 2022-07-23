import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage/CartPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
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
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// Stwórz routy do RegisterPage i CartPage i dodaj linki w odpowiednij miejscach
// Zaimplementuj logowanie firebase, stwórz nowy komponent LoginPage, tam stwórz formularz logowania i podepnij pod firebase
