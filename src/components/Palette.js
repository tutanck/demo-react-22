import * as React from "react";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import colors from "../utils/colors";

export default function Palette({ loadingColor, onSelectColor = () => {} }) {
  return (
    <Stack
      spacing={1}
      sx={{
        p: 4,
        alignItems: "start",
      }}
    >
      <Typography variant="h5" component="h2">
        Palette
      </Typography>

      <Grid container spacing={2}>
        {colors.map((color) => (
          <Grid item>
            <LoadingButton
              variant="contained"
              onClick={() => onSelectColor(color)}
              sx={{
                color,
                backgroundColor: color,
                opacity: 0.8,
                "&:hover": { color, backgroundColor: color, opacity: 1 },
              }}
              loading={loadingColor === color}
              disabled={loadingColor && loadingColor !== color}
            >
              Button
            </LoadingButton>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
