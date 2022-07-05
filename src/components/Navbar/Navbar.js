import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default class Navbar extends Component {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h1"
              align="center"
              sx={{ flexGrow: 1, fontSize: "2rem", fontFamily: "Roboto" }}
            >
              Currency exchange
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
