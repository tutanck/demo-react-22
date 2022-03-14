import * as React from "react";
import Stack from "@mui/material/Stack";
import { Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ReactComponent as Logo } from "../logo.svg";
import Palette from "../components/Palette";
import useDoMoreThings from "../hooks/doMoreThings";

export default function MainMore() {
  const { colors, loadingColor, color, onChangeColor } = useDoMoreThings({
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

      <Button variant="outlined" component={RouterLink} to="/">
        Main
      </Button>
    </Stack>
  );
}
