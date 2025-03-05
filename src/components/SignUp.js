import React, { useState } from "react";
import { Button, Grid, Container, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

import InputField from "./InputField"; 
import ErrorMessage from "./ErrorMessage"; 

const SignupForm = ({ onSignUpSuccess, setOpen }) => {
 
  const { control, handleSubmit, formState: { errors }, watch } = useForm();
  const [error, setError] = useState("");
  const password = watch("password");

  const onSubmit = (data) => {

    const signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];

    const isEmailRegistered = signUpData.some(
      (user) => user.email === data.email
    );

    if (isEmailRegistered) {
      setError("Email is already registered. Please sign in.");
    } else {
      signUpData.push(data);
      localStorage.setItem("signUpData", JSON.stringify(signUpData));
      alert("signUp Sucessfully")
      setOpen(false);
    }
  };

  return (
    <Container sx={{ padding: 0, fontSize: "13px" }}>
      <Typography variant="h5" sx={{ fontSize: "14px", fontWeight: 700 }} gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          {/* First Name Field */}
          <Grid item xs={12}>
            <InputField
              name="firstName"
              control={control}
              label="First Name"
              rules={{ required: "First name is required" }}
              errorMessage={errors.firstName?.message}
            />
          </Grid>

          {/* Last Name Field */}
          <Grid item xs={12}>
            <InputField
              name="lastName"
              control={control}
              label="Last Name"
              rules={{ required: "Last name is required" }}
              errorMessage={errors.lastName?.message}
            />
          </Grid>

          {/* Email Field */}
          <Grid item xs={12}>
            <InputField
              name="email"
              control={control}
              label="Email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              }}
              errorMessage={errors.email?.message}
            />
          </Grid>

          {/* Password Field */}
          <Grid item xs={12}>
            <InputField
              name="password"
              control={control}
              label="Password"
              type="password"
              rules={{
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              }}
              errorMessage={errors.password?.message}
            />
          </Grid>

          {/* Confirm Password Field */}
          <Grid item xs={12}>
            <InputField
              name="confirmPassword"
              control={control}
              label="Confirm Password"
              type="password"
              rules={{
                required: "Confirm Password is required",
                validate: (value) => value === password || "Passwords do not match",
              }}
              errorMessage={errors.confirmPassword?.message}
            />
          </Grid>

          {/* Display any error */}
          {error && <ErrorMessage message={error} />}

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color=""
              fullWidth
              sx={{
                borderRadius: "10px",
                padding: "5px",
                marginTop: "15px",
                textTransform: "none",
                fontSize: "12px",
                border:"1px solid"
               
              }}
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SignupForm;
