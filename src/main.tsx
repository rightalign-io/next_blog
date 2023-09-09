import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter, Link } from "react-router-dom";
import Header from "./components/Header";
import MenuIcon from '@mui/icons-material/Menu';
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

ReactDOM.render(
  <BrowserRouter>
    <div className="all">
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

