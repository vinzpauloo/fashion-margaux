import React from "react";
import "./App.scss";
import { Box, Typography, Link, Button } from "@mui/material";

const App = () => {
  return (
    <Box className="container">
      <Box className="side left">
        <Box className="image men"></Box>

        <Box className="caption">
          <Typography className="header">Men</Typography>
          <Link sx={{ textDecoration: "none" }}>
            <Button className="landingBtn">
              2023 Men's Fall/Winter Collection
            </Button>
          </Link>
        </Box>
      </Box>

      <Box className="side right">
        <Box className="image women"></Box>

        <Box className="caption">
          <Typography className="header">Women</Typography>
          <Link sx={{ textDecoration: "none" }}>
            <Button className="landingBtn">
              2023 Women's Fall/Winter Collection
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
