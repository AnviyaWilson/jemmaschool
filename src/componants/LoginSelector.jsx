import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login'; // Optional icon

const LoginSelector = () => {
  const buttonStyle = {
    backgroundColor: '#1976d2',
    '&:hover': {
      backgroundColor: '#115293',
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #93adcC, #e2cbcb, #7b93c0)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          boxShadow: 6,
          borderRadius: 4,
          p: 5,
          maxWidth: 420,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <LoginIcon sx={{ fontSize: 50, color: '#1976d2', mb: 1 }} />
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Login as:
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', mb: 3 }}>
          Select your role to continue
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Link to="/login/admin" style={{ textDecoration: 'none' }}>
            <Button variant="contained" fullWidth sx={buttonStyle}>
              Admin
            </Button>
          </Link>

          <Link to="/login/user" style={{ textDecoration: 'none' }}>
            <Button variant="contained" fullWidth sx={buttonStyle}>
              User
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginSelector;
