import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Box, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [formData, setFormData] = useState({
    Email: '',
    Password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.text();

      if (res.ok) {
        setIsSuccess(true);
        setMessage('Login successful');
        // Optional: redirect after a short delay
        setTimeout(() => {
          navigate('/user/dashboard');
        }, 1000);
      } else {
        setIsSuccess(false);
        setMessage(result);
      }
    } catch (err) {
      setIsSuccess(false);
      setMessage('Server error. Please try again later.');
    }
  };

  return (
    <Box style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2>User Login</h2>

        <TextField
          label="Email"
          name="Email"
          type="email"
          value={formData.Email}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label="Password"
          name="Password"
          type={showPassword ? 'text' : 'password'}
          value={formData.Password}
          onChange={handleChange}
          required
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

       

        {message && (
          <Alert severity={isSuccess ? 'success' : 'error'}>{message}</Alert>
        )}

        <button type="submit" style={styles.loginButton}>
          Login
        </button>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <span style={{ fontSize: '14px' }}>
    Don’t have an account?{' '}
    <Link to="/s" style={{ color: '#007BFF', fontWeight: 'bold', textDecoration: 'none' }}>
  Sign up
</Link>

  </span>
</div>

      </form>
    </Box>
  );
};

// Basic inline styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f4f4f4',
  },
  form: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
  },
  passwordWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  toggleButton: {
    position: 'absolute',
    right: '10px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#007BFF',
    fontSize: '0.9rem',
  },
  loginButton: {
    padding: '0.5rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
  },
};

export default UserLogin;
