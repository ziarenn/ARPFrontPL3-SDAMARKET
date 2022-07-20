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
