import * as React from "react";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import { Grid, Typography } from "@mui/material";

export default function Palette({
  colors = [],
  loadingColor,
  onSelectColor = () => {},
}) {
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
          <Grid item key={color}>
            <LoadingButton
              variant="contained"
              onClick={() => onSelectColor(color)}
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: color,
                opacity: 0.8,
                "&:hover": {
                  color: "white",
                  backgroundColor: color,
                  opacity: 1,
                },
              }}
              loading={loadingColor === color}
              disabled={loadingColor && loadingColor !== color}
            >
              {color}
            </LoadingButton>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
