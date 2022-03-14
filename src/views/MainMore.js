import * as React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { ReactComponent as Logo } from "../logo.svg";
import Palette from "../components/Palette";
import useDoMoreThings from "../hooks/doMoreThings";

export default function MainMore() {
  const { loadingColor, color, onChangeColor } = useDoMoreThings({
    defaultColor: "#61DAFB",
  });

  return (
    <Stack spacing={2}>
      <Logo fill={color} className="App-logo" />

      <Typography variant="h5" component="h2">
        Nous vous souhaitons la Bienvenne à la T@znozaure 2022
      </Typography>

      <Palette onSelectColor={onChangeColor} loadingColor={loadingColor} />
    </Stack>
  );
}
