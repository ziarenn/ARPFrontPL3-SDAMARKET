import { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import Bestsellers from "../Bestsellers/Bestsellers";
const HomePage = () => {
  const [categories, setCategories] = useState<string[] | undefined>();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: "3rem", fontFamily: "Roboto", mt: "2rem" }}
        align="center"
      >
        Browse and buy your favorite electronics, jewellery and clothes. All in
        one place.
      </Typography>
      {categories && <CategoryMenu categories={categories} />}
      <Typography
        variant="h3"
        component="h3"
        align="center"
        sx={{
          fontSize: "1.5rem",
          fontFamily: "Roboto",
          borderBottom: "1px solid orange",
          mb: ".5rem",
        }}
      >
        Our bestsellers:
      </Typography>
      <Bestsellers />
    </>
  );
};

export default HomePage;

// Stwórz komponent ProductTile, propsy: product
// stan clicked
// JSX:
// Card (onClick przestawia stan clicked na true jeżeli jest false i na odwrót):
//--------
// Box img (src=product.image)
// Typography z product.title
// Typography z product.category
// Typography z product.price
// Typography z product.rating.rate i product.rating.count
// --------
// Warunkowo renderowany Card w zależności od stanu clicked {clicked && <Card ...}:
// Typography z product.description
// Button Add to cart
