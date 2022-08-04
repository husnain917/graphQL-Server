import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export default function Footer() {
  return (
    <Paper sx={{marginTop: 'calc(10% + 10px)', bottom: 0, width: "100%", borderRadius: 4}} component="footer" square variant="outlined">
      <Container maxWidth="lg">

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "space-evenly",
            display: "flex",
            padding: 2
          }}
        >
          <Typography variant="caption" color="initial">
            ©2022 edX LLC. All rights reserved.
          </Typography>
          <Typography variant="caption" color="initial">
            Terms of Service &#38; Honor code
          </Typography>
          <Typography variant="caption" color="initial">
            Privacy Policy
          </Typography>
          <Typography variant="caption" color="initial">
            Accessibility Policy
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
