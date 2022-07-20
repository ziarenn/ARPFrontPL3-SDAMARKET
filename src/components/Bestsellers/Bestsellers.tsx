import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../../helpers/interfaces";
import { Card } from "@mui/material";
import ProductTile from "../ProductTile/ProductTile";
const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState<Product[]>();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=10`).then((res) => {
      setBestsellers(res.data);
    });
  }, []);
  return (
    <Card>
      {bestsellers &&
        bestsellers.map((el: Product, i: number) => {
          return <ProductTile key={i} product={el} />;
        })}
    </Card>
  );
};

export default Bestsellers;
