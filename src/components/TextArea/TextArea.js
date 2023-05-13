import React from "react";
import TextField from "@mui/material/TextField";
import { ErrorMessage, useField } from "formik";
import { Box } from "@mui/material";

const TextArea = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <Box>
      <Box>
        <TextField label={label} {...field} {...props} autoComplete="false" />
      </Box>
      <ErrorMessage style={{ mt: "-.5rem", mb: ".5rem" }} name={field.name} />
    </Box>
  );
};
export default TextArea;
