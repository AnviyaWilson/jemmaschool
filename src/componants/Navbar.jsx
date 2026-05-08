import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(to right, #1565c0, #64b5f6)',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        paddingY: 1.2,
        backdropFilter: 'blur(6px)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between',pl:0 }}>
        {/* Logo / Brand */}
        <Box display="flex" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: 700,
              letterSpacing: 1.5,
              fontFamily: `'Poppins', 'Segoe UI', sans-serif`,
              color: 'white',
              marginLeft: '4px', 
            }}
          >
            St. Jemma's School
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {[
            { label: 'Home', path: '/h' },
            { label: 'About Us', path: '/a' },
            { label: 'Register', path: '/r' },
            { label: 'Courses', path: '/c' },
            { label: 'Contact Us', path: '/' },
          ].map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{
                color: 'white',
                fontWeight: 600,
                borderRadius: '30px',
                textTransform: 'none',
                paddingX: 2,
                paddingY: 1,
                fontSize: '1rem',
                transition: '0.3s ease',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.15)',
                  transform: 'scale(1.06)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
