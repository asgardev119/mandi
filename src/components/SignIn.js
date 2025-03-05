// src/components/SignInForm.js

import React, { useState } from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField"; // Import the InputField component

const SignInForm = ({ setLoggedIn, setUsername, setOpen }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signUpData = JSON.parse(localStorage.getItem("signUpData")) || [];

  const onSubmit = (data) => {
    const user = signUpData.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      const currentPage = window.location.pathname;
      localStorage.setItem("currentPage", currentPage);

      setLoggedIn(true);
      setUsername(user.firstName);
      setOpen(false);

      // Ensure to redirect to the original page or fallback to home
      navigate(localStorage.getItem("currentPage") || "/");
    } else {
      setError("Invalid email or password. Please sign up first.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography sx={{ fontSize: "14px", fontWeight: 700, width: "auto" }} gutterBottom>
        Sign In
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Email Field */}
          <InputField
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
            label="Email"
            error={errors.email}
            helperText={errors.email?.message}
          />

          {/* Password Field */}
          <InputField
            name="password"
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            }}
            label="Password"
            type="password"
            error={errors.password}
            helperText={errors.password?.message}
          />

          {/* Error Message */}
          {error && (
            <Box>
              <Typography color="error" sx={{ fontSize: "12px" }}>
                {error}
              </Typography>
            </Box>
          )}

          {/* Sign In Button */}
          <Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color=""
              sx={{
                borderRadius: "10px",
                padding: "5px",
                marginTop: "15px",
                fontSize: "12px",
                textTransform: "none",
                border: "1px solid",
              }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </form>
    </Container>
  );
};

export default SignInForm;
