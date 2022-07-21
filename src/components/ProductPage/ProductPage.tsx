import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography, Paper } from "@mui/material";
import ProductTile from "../ProductTile/ProductTile";
import { ProductPageProps, Product } from "../../helpers/interfaces";
const ProductPage: React.FC<ProductPageProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => {
        setProducts(res.data);
      });
  }, [category]);
  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: "2rem", borderBottom: "1px solid orange" }}
        align="center"
      >
        {category.toUpperCase()}
      </Typography>
      <Card component={Paper} sx={{ display: "block", mx: "auto" }}>
        {products &&
          products.map((el: Product, i: number) => {
            return <ProductTile product={el} key={i} />;
          })}
      </Card>
    </>
  );
};

export default ProductPage;
