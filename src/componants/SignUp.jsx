import React, { useState } from 'react';

import { Person, Email, Lock, AccountCircle, Visibility, VisibilityOff, Message } from '@mui/icons-material';
import { Alert, Box, Button, Card, CardContent, Fade, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const SignUp =() =>{
   const [showPassword, setShowPassword] = useState(false);
   const [message, setMessage] = useState('');
const [isSuccess, setIsSuccess] = useState(false);

   const [formData, setFormData] = useState({
    Username: "",
    Email: "",
    Password: ""
    });
    const navigate = useNavigate();

const inputHandler =(e)=>{
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

}
const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.text();
        setMessage(data);
        setIsSuccess(true);
        setFormData({ Username: "", Email: "", Password: "" });

        // ✅ Redirect to user homepage after short delay (optional)
        setTimeout(() => {
          navigate("/user/h"); // 👈 Change to your actual home route
        }, 1000);
      } else {
        const errorText = await res.text();
        setMessage(errorText || "Signup failed");
        setIsSuccess(false);
      }
    } catch (err) {
      setMessage("Network error or server not reachable");
      setIsSuccess(false);
      console.error("Error:", err);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: 'linear-gradient(270deg, #f8bbd0, #b2ebf2, #c5cae9)',
        backgroundSize: '600% 600%',
        animation: 'gradientShift 12s ease infinite',
        fontFamily: 'Segoe UI, sans-serif',
        '@keyframes gradientShift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        }
      }}
    >
      <Fade in timeout={700}>
        <Card
          sx={{
            width: 420,
            p: 4,
            borderRadius: 5,
            boxShadow: 12,
            backgroundColor: 'rgba(255,255,255,0.75)',
            backdropFilter: 'blur(10px)',
            transition: '0.4s ease-in-out',
            '&:hover': {
              transform: 'scale(1.015)',
              boxShadow: 15
            }
          }}
        >
          <CardContent>
            <Box display="flex" justifyContent="center" mb={2}>
              <AccountCircle sx={{ fontSize: 54, color: '#1976d2' }} />
            </Box>

            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold', color: '#1976d2' }}
            >
              Sign Up
            </Typography>

            <form onSubmit={submitHandler} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <TextField
                label="Username"
                name="Username"
                value={formData.Username}
                onChange={inputHandler}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person color="primary" />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="Email Address"
                name="Email"
                type="email"
                value={formData.Email}
                onChange={inputHandler}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="primary" />
                    </InputAdornment>
                  )
                }}
              />
              <TextField
                label="Password"
                name="Password"
                type={showPassword ? 'text' : 'password'}
                value={formData.Password}
                onChange={inputHandler}
                required
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="primary" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />

              <Button
                type="submit"
                variant="contained"
                onClick={submitHandler}
                size="large"
                fullWidth
                sx={{
                  backgroundColor: '#1976d2',
                  fontWeight: 'bold',
                  letterSpacing: 1,
                  mt: 1,
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: '#0d47a1'
                  }
                }}
              >
                Create Account
              </Button>
              <Box mt={2} textAlign="center">
               <Typography variant="body2">
                Already have an account?{' '}
                <Link to="/login-select" style={{ color: '#1976d2', fontWeight: 'bold', textDecoration: 'none' }}>
                 Log in
                </Link>
              </Typography>
              </Box>
            </form>

            {message && (
              <Box mt={3}>
                <Alert severity={isSuccess ? 'success' : 'error'} variant="filled">
                  {message}
                </Alert>
              </Box>
            )}
          </CardContent>
        </Card>
      </Fade>
    </Box>
  );
}

export default SignUp;


