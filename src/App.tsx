import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/HomePage/HomePage";
import ProductPage from "./components/ProductPage/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/CartPage/CartPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/firebaseConfig";
import { useDispatch } from "react-redux";
import {setAuthState} from './redux/actions/authActions'
function App() {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    user ? dispatch(setAuthState(true)) : dispatch(setAuthState(false));
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
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

// 1. Stwórz typ akcji w actionTypes.ts (ADD_PRODUCT_TO_CART)
// 2. Stwórz plik productActions.ts w folderze actions
// W tym pliku stwórz kretor akcji addProductToCart, ten kreator będzie przyjmował 1 produkt (typ obiektu Product, macie do tego interface), zwraca obiekt akcji z typem ADD_PRODUCT_TO_CART i z payloadem product (product przychodzi z argumentu)
// 3. Stwórz plik productReducer.ts
// W tym pliku stwórz obiekt initialState:
// const initialState = { selectedProducts: [] } (oraz interface do tego obiektu)
// Następnie stwórz reducer productReducer, w parametrach będzie przyjmował state z wartością defaultową initialState oraz action z typem AnyAction
// W środku reducera stwórz instrukcje switch (switchujemy po action.type) i reaguj na case ADD_PRODUCT_TO_CART
// W tym casie zwracaj obiekt stanu z polem selectedProducts i wstawiaj w to pole payload z akcji (pamiętaj o spread operator) jak i również obiekty z poprzedniego stanu
// Na końcu w intrukcji default: return state
// 3. W pliku index.ts dodaj w obiekcie opcji linijkę allProducts: productReducer, wcześniej importując productReducer
// 4. W ProductTile.tsx znajduje się przycisk Add to cart, reaguj na klik na ten przycisk poprzez wrzucanie danego produktu do stanu
// dispatch(addProductToCart(product))
// 5. W CartPage.tsx zastosuj useSelector do ściągnięcia ze stanu listy selectedProducts i przypisz ją do zmiennej products
// const products = useSelector(state => ...........)