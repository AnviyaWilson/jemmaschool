import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded admin credentials
    const adminEmail = 'admin@jemma.com';
    const adminPassword = 'admin123';

    if (formData.email === adminEmail && formData.password === adminPassword) {
      setError('');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleLogin} style={styles.form}>
      <h2 style={{ textAlign: 'center' }}>Admin Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Admin Email"
        value={formData.email}
        onChange={handleChange}
        required
        style={styles.input}
      />
      <input
        type="password"
        name="password"
        placeholder="Admin Password"
        value={formData.password}
        onChange={handleChange}
        required
        style={styles.input}
      />
      {error && <p style={styles.error}>{error}</p>}
      <button type="submit" style={styles.button}>
        Login
      </button>
    </form>
  );
};

const styles = {
  form: {
    maxWidth: '320px',
    margin: '5rem auto',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '0.5rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    textAlign: 'center',
  },
};

export default AdminLogin;
