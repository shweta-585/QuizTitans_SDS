  import { Box, Drawer, Typography, IconButton } from '@mui/material';
  import CloseIcon from '@mui/icons-material/Close';
  import { useState } from 'react';
  import '../styles/navbar.css';
  import { Button } from '@mui/material';
  import HomeIcon from '@mui/icons-material/Home';
  import AddIcon from '@mui/icons-material/Add';
  import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
  import LogoutIcon from '@mui/icons-material/Logout';
  import { Link } from 'react-router-dom';

  const MyNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const isClose = (open) => (event) => {
      if (event.type === 'keydown') {
        return;
      }
      setIsOpen(open);
    };

    return (
      <>
        <div className="navbar">
          <div className="menu-logo">
            <button id="navbar-menu" onClick={() => setIsOpen(true)}>
              &#9776;
            </button>
            <h2 className="logo">QuizTitans</h2>
          </div>
          <div className="sign">
            <a href="google.com">Sign Up</a>
            <a className="in" href="myLogin.jsx">
              Sign In
            </a>
          </div>
        </div>

        <Drawer anchor="left" open={isOpen} onClose={isClose(false)} style={ {color: 'white',  backgroundColor: '#00000008'} } sx={{ "& .MuiDrawer-paper": { backgroundColor: '#8c3e50' } }}>
          <Box p={2} width={'250px'} role={'presentation'}>
            <Typography variant="h6" component={'div'} marginBottom={'10px'}>Menu Bar</Typography>
            <IconButton onClick={isClose(false)} style={{ position: 'absolute', top: 5, right: 8 }}>
              <CloseIcon />
            </IconButton>

            <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2}>
              <IconButton>
                <HomeIcon />
              </IconButton>
              <Button component={Link} to='/'>Home</Button>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2}>
              <IconButton to='/create'>
                <AddIcon />
              </IconButton>
              <Button component={Link} to='/create'>Create Quiz</Button>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2}>
              <IconButton>
                <PsychologyAltIcon />
              </IconButton>
              <Button component={Link} to='/show'>Show Quiz</Button>
            </Box>

            <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2}>
              <IconButton>
                <LogoutIcon />
              </IconButton>
              <Button component={Link} to='/logout'>Log Out</Button>
            </Box>
          </Box>
        </Drawer>
      </>
    );
  };

  export default MyNavbar;
