import tw from "tailwind-styled-components";
import "../App.scss";
import Socials from "./Socials";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';


const links = [
  {link: '/login', name: 'Login', },
  {link: '/', name: 'Blog', },
  // {link: '/articles', name: 'Articles', },
  {link: '/about', name: 'About', },
  {link: '/contact', name: 'Contact', },
];

export default function Header() {
  const Nav = tw.nav`flex justify-between text-base align-center`;
  const Container = tw.header`invisible absolute top-1 left-5 text-gray-600 body-font links md:visible`;
  const GridItem = tw.div`animate__animated animate__bounceInUpInUp animate__delay-1s`
  return (<>
    <span className="sm:visable md:hidden" >
      {/* <TemporaryDrawer /> */}
    </span>
    <HeaderLG />
    </>
  );
}

function HeaderLG () {
  return <header className="text-gray-600 body-font bg-gray-200 mb-1 md: m-0">
  <div className=" flex justify-around px-5 flex-row md:mx-auto items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--GyB_U5jy--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/a9mi84xpp6i6q4yn28go.png" width="150px" alt="" />
    </a>
    <nav className="hidden flex-wrap items-center text-base justify-center md:flex md:visable md:ml-auto md:mr-auto ">
      {
      links.map((link, index) => {
        return <span key={index}> <a href={link.link} className="mr-5 hover:text-gray-900"> {link.name} </a> </span>
      })
      }
    </nav>
    <span className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      <Socials />
    </span>
    <span className="sm:visable md:hidden" >
      <TemporaryDrawer />
    </span>
  </div>
</header>
}

type Anchor = 'left' | 'right';

function TemporaryDrawer() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =  (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'left' || anchor === 'right' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map((text, index) => (
              <a href={text.link}>
          <ListItem key={text.name} disablePadding>
            <ListItemButton> 
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
            </a>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {(['left'] as const).map((anchor) => (
        <span key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </span>
      ))}
      
    </div>
  );
}
