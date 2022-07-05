import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.state = { keyword: "" };
  }

  inputChangeHandler(e) {
    this.props.setState({ keyword: e.target.value.toLowerCase() });
  }

  render() {
    return (
      <form>
        <Typography
          variant="h2"
          align="center"
          sx={{ fontSize: "1rem", fontFamily: "Roboto" }}
        >
          Currency name:
        </Typography>
        <TextField
          type="text"
          id="keyword-input"
          onChange={this.inputChangeHandler}
          align="center"
          sx={{ display: "block", mx: "auto" }}
        />
      </form>
    );
  }
}
