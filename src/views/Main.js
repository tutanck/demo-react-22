import * as React from "react";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";
import Palette from "../components/Palette";
import useDoThings from "../hooks/doThings";

export default function Main() {
  const { colors, loadingColor, color, onChangeColor } = useDoThings({
    defaultColor: "#61DAFB",
  });

  return (
    <Stack spacing={2}>
      <Logo fill={color} className="App-logo" />

      <Typography variant="h5" component="h2">
        Bienvenne à la T@znozaure 2022
      </Typography>

      <Palette
        colors={colors}
        loadingColor={loadingColor}
        onSelectColor={onChangeColor}
      />

      <Button variant="outlined" component={RouterLink} to="/more">
        More
      </Button>
    </Stack>
  );
}
