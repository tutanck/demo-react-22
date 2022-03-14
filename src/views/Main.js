import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { ReactComponent as Logo } from "../logo.svg";
import Palette from "../components/Palette";
import useDoThings from "../hooks/doThings";

export default function Main() {
  const { loadingColor, color, onChangeColor } = useDoThings({
    defaultColor: "#61DAFB",
  });

  return (
    <Stack spacing={2}>
      <Logo fill={color} className="App-logo" />

      <Typography variant="h5" component="h2">
        Bienvenne à la T@znozaure 2022
      </Typography>

      <Palette onSelectColor={onChangeColor} loadingColor={loadingColor} />
    </Stack>
  );
}
