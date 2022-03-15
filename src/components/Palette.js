import * as React from "react";
import Stack from "@mui/material/Stack";
import LoadingButton from "@mui/lab/LoadingButton";
import { CircularProgress, Grid, Typography } from "@mui/material";

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
                color: "#282c34",
                fontWeight: "bold",
                backgroundColor: color,
                opacity: 0.8,
                "&:hover": {
                  color: "#282c34",
                  backgroundColor: color,
                  opacity: 1,
                },
              }}
              loading={loadingColor === color}
              loadingIndicator={<CircularProgress color="primary" size={16} />}
              /* disabled={loadingColor && loadingColor !== color} */
            >
              {color}
            </LoadingButton>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
