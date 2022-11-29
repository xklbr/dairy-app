import { Grid, Typography } from "@mui/material";
import { StarTwoTone } from "@mui/icons-material";

export function NothingSelectedView() {
  return (
    <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "calc(100vh - 110px)",
        backgroundColor: "primary.main",
        borderRadius: 3,
      }}
    >
      <Grid item xs={12}>
        <StarTwoTone sx={{ fontSize: 100, color: "white" }} />
      </Grid>
      <Grid item xs={12}>
        <Typography color="white" variant="h5">
          Select or create an entry
        </Typography>
      </Grid>
    </Grid>
  );
}
