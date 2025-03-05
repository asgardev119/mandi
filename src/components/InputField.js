// InputField.js
import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const InputField = ({ name, control, label, rules, type = "text", errorMessage,placeholder }) => (
  <Controller
    name={name}
    control={control}
    rules={rules}
    render={({ field, fieldState }) => (
      <TextField
        fullWidth
        size="small"
        variant="standard"
       
        {...field}
        placeholder={label}
        type={type}
        error={!!fieldState?.error}
        helperText={fieldState?.error ? fieldState.error.message : errorMessage}
        sx={{
          "& .css-1wd3yy0-MuiInputBase-input-MuiInput-input": {
            fontSize: "12px",
            marginTop: 2,
            color:"#fff",
          },
        }}
      />
    )}
  />
);

export default InputField;
