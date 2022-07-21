import React from "react";
import { Card, Paper, Typography, Button, Box } from "@mui/material";
import { CartProductTileProps } from "../../helpers/interfaces";
const CartProductTile: React.FC<CartProductTileProps> = ({ product }) => {
  return (
    <Card
      component={Paper}
      sx={{ maxWidth: "35%", mx: "auto", my: "1rem", p: ".5rem" }}
    >
      <Box
        component="img"
        alt={product.title}
        sx={{ height: "200px", display: "block", mx: "auto" }}
      />
      <Typography paragraph sx={{ fontSize: "1rem" }}>
        {product.title}
      </Typography>
      <Typography component="span" sx={{ fontSize: "1rem" }}>
        {product.price}$
      </Typography>
      <Button variant="contained" sx={{ bgcolor: "red", ml: "2rem" }}>
        Remove from cart
      </Button>
    </Card>
  );
};

export default CartProductTile;
