import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const NavbarUser = () => {
  const navItems = [
    { label: 'Home', path: '/user/h' },
    { label: 'Contact Us', path: '/user/' },
    { label: 'About Us', path: '/user/a' },
    { label: 'Register', path: '/user/r' },
    { label: 'Courses', path: '/user/c' },
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/h');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'darkblue',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          py: 1,
        }}
      >
        {/* ✅ Added pl: 2 */}
        <Toolbar sx={{ pl: 2 }}>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>

          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: 'uppercase',
              fontFamily: 'Segoe UI, Roboto, sans-serif',
              color: 'white',
            }}
          >
            St.Jemma Admission portal
          </Typography>

          {/* ✅ Added ml: 'auto' */}
          <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '13px',
                  textTransform: 'uppercase',
                  borderRadius: '20px',
                  letterSpacing: 0.5,
                  transition: '0.3s ease-in-out',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.05)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}

            <Button
              onClick={handleLogout}
              sx={{
                color: 'white',
                fontWeight: 600,
                fontSize: '13px',
                textTransform: 'uppercase',
                borderRadius: '20px',
                letterSpacing: 0.5,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  transform: 'scale(1.05)',
                },
              }}
            >
              Logout
            </Button>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavbarUser;