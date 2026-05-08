import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate } from 'react-router-dom';

const NavbarAdmin = () => {
  const navItems = [
    { label: 'Home', path: '/admin/h' },
    { label: 'Contact Us', path: '/admin/' },
    { label: 'About Us', path: '/admin/a' },
    { label: 'Members', path: '/admin/r' },
    { label: 'Courses', path: '/admin/c' }
  ];
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/h');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'darkblue', paddingY: 1 }}>
        
        {/* ✅ Added pl: 2 for left spacing */}
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
              textTransform: 'uppercase',
              letterSpacing: 1,
              color: 'white',
              fontFamily: 'Segoe UI, Roboto, sans-serif',
            }}
          >
            St.Jemma Admission portal
          </Typography>

          {/* ✅ Added ml: 'auto' to push buttons to right */}
          <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
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
                  transition: '0.3s',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
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

export default NavbarAdmin;