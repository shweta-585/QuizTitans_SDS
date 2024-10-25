import { Box, Drawer, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import '../styles/navbar.css';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import AccountCircle from '@mui/icons-material/AccountCircle';

const MyNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

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
          <div className="login-info">
            <AccountCircle />
            <h4>Admin Login</h4>
          </div>
        </div>
      </div>

      <Drawer anchor="left" open={isOpen} onClose={isClose(false)} style={{ color: 'white', backgroundColor: '#00000008' }} sx={{ "& .MuiDrawer-paper": { backgroundColor: '#006569', color: 'white' } }}>
        <Box p={2} width={'250px'} role={'presentation'}>
          <Typography variant="h6" component={'div'} marginBottom={'10px'}>Menu Bar</Typography>
          <IconButton onClick={isClose(false)} style={{ position: 'absolute', top: 5, right: 8 }}>
            <CloseIcon />
          </IconButton>

          <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2}>
            <IconButton>
              <HomeIcon />
            </IconButton>
            <Button onClick={() => navigate('/admin-dashboard')} style={{color: "white"}} >Home</Button>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2}>
            <IconButton to='/create'>
              <AddIcon />
            </IconButton>
            <Button onClick={() => navigate('/create')} style={{color: "white"}}>Create Quiz</Button>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2}>
            <IconButton>
              <PsychologyAltIcon />
            </IconButton>
            <Button onClick={() => navigate('/show')} style={{color: "white"}} >Show Quiz</Button>
          </Box>

          <Box display="flex" alignItems="center" justifyContent="flex-start" mb={2}>
            <IconButton>
              <LogoutIcon />
            </IconButton>
            <Button onClick={() => navigate('/login')} style={{color: "white"}}>Log Out</Button>
          </Box>

        </Box>
      </Drawer>
    </>
  );
};

export default MyNavbar;
