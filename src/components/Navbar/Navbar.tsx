import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../helpers/firebaseConfig";
import { useSelector } from "react-redux";

interface AuthState {
  authState: boolean;
}

interface State {
  authState: AuthState;
}

const Navbar = () => {
  const authState = useSelector((state: State) => state.authState.authState);

  const buttonClickHandler = () => {
    if (authState) {
      signOut(auth).then(() => {
        console.log("Signed out successfully");
      });
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "orange" }}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ color: "white" }}
            >
              SDA MARKET
            </Typography>
          </Link>

          <Box sx={{ display: "block", mr: "500px" }}>
            <Link
              to="/electronics"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                ELECTRONICS
              </Button>
            </Link>
            <Link
              to="/jewelery"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                JEWELLERY
              </Button>
            </Link>
            <Link to="/mans" style={{ textDecoration: "none", color: "white" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                MEN'S CLOTHING
              </Button>
            </Link>
            <Link
              to="/womans"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button
                variant="contained"
                sx={{ backgroundColor: "#FC766AFF", mx: ".5rem" }}
              >
                WOMEN'S CLOTHING
              </Button>
            </Link>
          </Box>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ bgcolor: "#FC766AFF", mr: "0.1rem" }}
            >
              Cart
            </Button>
          </Link>
          <Link
            to={authState ? "/" : "/login"}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              sx={{ bgcolor: "#FC766AFF", mr: "0.1rem" }}
              onClick={buttonClickHandler}
            >
              {authState ? "Log out" : "Log in"}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
