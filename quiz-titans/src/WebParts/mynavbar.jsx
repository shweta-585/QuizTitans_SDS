import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  const [open, setOpen] = useState(false); // Use open state for the Drawer

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} onClick={() => toggleDrawer(false)}>
      <List>
        {['Home', 'Create Quiz', 'Show Quiz', 'Log Out'].map((text, index) => (
          <ListItem key={text}>
            <ListItemButton>
              {index === 0 ? (
                <Link to="/">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </Link>
              ) : index === 1 ? (
                <Link to="/create">
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </Link>
              ) : index === 2 ? (
                <Link to="/show">
                  <ListItemIcon>
                    <PsychologyAltIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </Link>
              ) : (
                <>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className="navbar">
        <div className="menu-logo">
          <button id="navbar-menu" onClick={() => toggleDrawer(true)}>&#9776;</button>
          <h2 className="logo">QuizTitans</h2>
        </div>
        <div className="sign">
          <a href="google.com">Sign Up</a>
          <a className="in" href='myLogin.jsx'>Sign In</a>
        </div>
      </div>
      
      <Drawer anchor="left" open={open} onClose={() => toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default MyNavbar;
