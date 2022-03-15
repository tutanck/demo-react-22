import * as React from "react";
import { Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function LinkButton({ to, children }) {
  return (
    <Button variant="text" component={RouterLink} to={to}>
      {children}
    </Button>
  );
}
