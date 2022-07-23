import React from "react";
import {
  Card,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { RegisterFormInputs } from "../../helpers/interfaces";
const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const submitHandler: SubmitHandler<RegisterFormInputs> = ({
    email,
    password1,
    password2,
  }) => {
    if (password1 === password2) {
      createUserWithEmailAndPassword(auth, email, password1)
        .then((creds) => {
          console.log("User logged in, creds: ", creds);
        })
        .catch((err) => console.log(err.message));
    } else {
      console.log("Passwords not equal!");
    }
  };

  return (
    <>
      <Card
        component={Paper}
        sx={{ display: "block", mx: "auto", maxWidth: "35%", my: "1rem" }}
      >
        <Typography variant="h2" align="center" sx={{ fontSize: "2rem" }}>
          Register new account
        </Typography>
        <Grid container>
          <form
            onSubmit={handleSubmit(submitHandler)}
            style={{
              margin: "auto",
              marginTop: ".5rem",
              marginBottom: ".5rem",
              display: "block",
            }}
          >
            <TextField
              variant="outlined"
              label="email"
              type="email"
              {...register("email", { required: true })}
              sx={{ display: "block", my: ".3rem" }}
            />
            <TextField
              variant="outlined"
              label="password"
              type="password"
              {...register("password1", { required: true })}
              sx={{ display: "block", my: ".3rem" }}
            />
            <TextField
              variant="outlined"
              label="repeat password"
              type="password"
              {...register("password2", { required: true })}
              sx={{ display: "block", my: ".3rem" }}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                display: "block",
                mx: "auto",
                my: ".3rem",
                bgcolor: "#FC766AFF",
              }}
            >
              Register
            </Button>
          </form>
        </Grid>
      </Card>
    </>
  );
};

export default RegisterPage;
