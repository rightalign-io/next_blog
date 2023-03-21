import { Button, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import tw from "tailwind-styled-components";
import "../App.scss";

export default function Header() {
  const Nav = tw.nav`flex justify-between text-base`;
  const Container = tw.header`invisible absolute top-2 left-5 text-gray-600 body-font links md:visible`;
  const GridItem = tw.div`animate__animated animate__bounceInUpInUp animate__delay-1s`

  return (
    <Container>
      <Nav>
          <Grid className="flex gap-3">
            <GridItem>
              <Link to="/">
                <Button variant="outlined"> Home</Button>
              </Link>
            </GridItem>
            <GridItem>
              <Link to="articles">
                <Button variant="outlined">articles</Button>
              </Link>
            </GridItem>
            <GridItem>
              <Button variant="outlined">
                <Link to="contact"> contact</Link>
              </Button>
            </GridItem>
            <GridItem>
              <Link to="about">
                <Button variant="outlined">about</Button>
              </Link>
            </GridItem>
          </Grid>
          <span className="animate__animated animate__fadeInTopRight">
            <img src="/logo.jpg" alt="logo" loading="lazy" style={{ width: '90px', height: '90px', borderRadius: '50%'}} />
          </span>
        </Nav>
    </Container>
  );
}

