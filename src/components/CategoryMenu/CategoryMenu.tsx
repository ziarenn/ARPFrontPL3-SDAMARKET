import React from "react";
import { CategoryMenuProps } from "../../helpers/interfaces";
import { Paper } from "@mui/material";
import CategoryTile from "../CategoryTile/CategoryTile";
const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
  return (
    <Paper elevation={1} sx={{ my: "2rem" }}>
      {categories.map((el: string, i: number) => {
        return <CategoryTile category={el} />;
      })}
    </Paper>
  );
};

export default CategoryMenu;

// JSX:
// Paper
// {categories.map}:
// CategoryTile (przez props podajemy daną kategorie)

// CategoryTile:
// 1. Stwórz interface z propsami (przyjmuje stringa)
// 2. Stwórz stan image (string)
// 3. useEffect: fetch z `https://fakestoreapi.com/products/category/${category}?limit=1`, z danych które przyjdą do stanu wchodzi własność image, DA: []

// JSX:
// Card
// Typography z textem {category}
// wyświeltnie obrazka wg stanu image (Box, component='img' src='')
