import { useState, useEffect } from "react";
import axios from "axios";
import { Typography } from "@mui/material";
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
      {/* <CategoryMenu categories={categories}/> */}
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
      {/* <Bestsellers/> */}
    </>
  );
};

export default HomePage;
