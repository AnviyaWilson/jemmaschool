import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const NavbarHome = () => {
  const navItems = [
    { label: 'Home', path: '/h' },
    { label: 'Contact Us', path: '/' },
    { label: 'About Us', path: '/a' },
    { label: 'Sign Up', path: '/s' },
    { label: 'Login', path: '/login-select' },
  ];

  return (
    <Box sx={{ flexGrow: 1, gap: 2 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'darkblue',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          paddingY: 1,
        }}
      >
        <Toolbar disableGutters sx={{ pl: 2 }}>

          <Typography
            variant="h6"
            sx={{
              flexGrow: 0,   // ✅ changed from 1 → 0
              marginLeft: 0,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: 'white',
              fontFamily: 'Segoe UI, Roboto, sans-serif',
            }}
          >
            St.Jemma Admission portal
          </Typography>

          <Box sx={{ display: 'flex', gap: 3, marginLeft: 'auto' }}> {/* ✅ added marginLeft */}
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '13px',
                  letterSpacing: 0.5,
                  borderRadius: '20px',
                  transition: '0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarHome;