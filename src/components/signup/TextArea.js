import React from "react";
import TextField from "@mui/material/TextField";
import { ErrorMessage, useField } from "formik";
import "./signup.css";

const TextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="text-area">
      <div>
        <TextField label={label} {...field} {...props} autoComplete="false" />
      </div>
      <ErrorMessage component="div" name={field.name} className="error-tag" />
    </div>
  );
};

export default TextArea;
