import { useState, useEffect } from "react";
import axios from "axios";
import { CategoryTileProps } from "../../helpers/interfaces";
import { Card, Typography, Box } from "@mui/material";
const CategoryTile: React.FC<CategoryTileProps> = ({ category }) => {
  const [image, setImage] = useState<string>();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}?limit=1`)
      .then((res) => {
        setImage(res.data[0].image);
      });
  }, []);
  return (
    <Card
      sx={{
        display: "inline-block",
        width: "calc(24% - 1px)",
        mx: "0.5%",
        height: "45vh",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: "1.5rem", fontFamily: "Roboto" }}
        align="center"
      >
        {category.toUpperCase()}
      </Typography>
      <Box
        component="img"
        alt={category}
        src={image}
        sx={{ width: "50%", display: "block", mx: "auto" }}
      />
    </Card>
  );
};

export default CategoryTile;

// 1. Stwórz typ akcji FETCH_IMAGES w ActionTypes.ts
// 2. Stwórz odpowiedni case w reducerze productReducer
// 3. Stwórz kreator akcji fetchImages:
// a) w argumencie kreator będzie przyjmował liste kategorii (która będzie listą stringów)
// b) dla każdej kategorii ma zostać wykonany osobny fetch
// c) dispatch:
// - type: ActionTypes.FETCH_IMAGES
// - payload: (lista z linkami do obrazków)
// 4. W CategoryTile.tsx nie ma być fetcha, link do obrazka ma być przekazany propsem.
// 5. Sam dispatch i wywołanie fetchImages ma być w CategoryMenu.tsx (w useEffect by wykonało sie tylko 1 raz), w CategoryMenu zastosuj useSelector do wyciągnięcia listy fetchedImages ze stanu