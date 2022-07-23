import { useState, useEffect } from "react";
import axios from "axios";
import { Typography, Button } from "@mui/material";
import CartProductTile from "../CartProductTile/CartProductTile";
import { Product } from "../../helpers/interfaces";
const CartPage = () => {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=5`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const calculateTotal = () => {
    return products?.length !== 0
      ? products?.map((product) => product.price).reduce((a, b) => a + b)
      : "0";
  };

  return (
    <>
      {products &&
        products.map((el: Product, i: number) => {
          return <CartProductTile product={el} key={i} />;
        })}
      <Typography variant="h2" sx={{ fontSize: "2rem" }} align="center">
        Total: {calculateTotal()}$
      </Typography>
      <Button
        variant="contained"
        sx={{ bgcolor: "#FC766AFF", display: "block", mx: "auto" }}
      >
        Order
      </Button>
    </>
  );
};

export default CartPage;
