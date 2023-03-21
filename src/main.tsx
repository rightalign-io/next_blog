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
      <Header />
      <FadeMenu />
      <App />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="visible md:invisible">
      <Button style={{position:'absolute', top: '0.5em', left: '1.5em'}}
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}  variant="outlined"
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/">
            <Button variant="text"> Home</Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="articles">
            <Button variant="text">articles</Button>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Button variant="text">
            <Link to="contact"> contact</Link>
          </Button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link to="about">
            <Button variant="text">about</Button>
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
