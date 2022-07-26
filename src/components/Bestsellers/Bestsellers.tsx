import { useState, useEffect } from "react";
import axios from "axios";
import { Product, State } from "../../helpers/interfaces";
import { Card } from "@mui/material";
import ProductTile from "../ProductTile/ProductTile";
import { fetchProducts } from "../../redux/actions/productActions";
import { useAppDispatch } from "../../redux/store";
import { ThunkDispatch } from "redux-thunk";
import { initialState } from "../../helpers/interfaces";
import { AnyAction } from "redux";
import { useSelector } from "react-redux";
const Bestsellers = () => {
  const dispatch = useAppDispatch();

  const products = useSelector(
    (state: State) => state.allProducts.fetchedProducts
  );

  useEffect(() => {
    dispatch(
      fetchProducts(10) as ThunkDispatch<initialState, unknown, AnyAction>
    );
  }, []);

  return (
    <Card>
      {products &&
        products.map((el: Product, i: number) => {
          return <ProductTile key={i} product={el} />;
        })}
    </Card>
  );
};

export default Bestsellers;
