import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "orange" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "white" }}
          >
            SDA MARKET
          </Typography>
          <Box sx={{ display: "block", mr: "500px" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
            >
              ELECTRONICS
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
            >
              JEWELLERY
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
            >
              MEN'S CLOTHING
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
            >
              WOMEN'S CLOTHING
            </Button>
          </Box>
          <Button
            variant="contained"
            sx={{ bgcolor: "#FC766AFF", mr: "0.1rem" }}
          >
            Cart
          </Button>
          <Button
            variant="contained"
            sx={{ bgcolor: "#FC766AFF", mr: "0.1rem" }}
          >
            Log in
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
