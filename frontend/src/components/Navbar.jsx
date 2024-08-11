import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
//import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee App
          </Typography>
          <Link to={"/"}><IconButton
            size="large"
            style={{"color":'white'}}
            aria-label="home"
            sx={{ mr: 2 }}
          >
            <HomeIcon />
          </IconButton></Link>
          <Link to={'/add'}><IconButton
            size="large"
            style={{"color":'white'}}
            
            aria-label="add"
          >
            <AddIcon />
          </IconButton></Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar