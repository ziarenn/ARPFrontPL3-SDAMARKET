import React from "react";
import { CategoryMenuProps } from "../../helpers/interfaces";
const CategoryMenu: React.FC<CategoryMenuProps> = ({ categories }) => {
  return <div>CategoryMenu</div>;
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