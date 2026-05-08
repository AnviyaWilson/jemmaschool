import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/user/login'); // or wherever your login route is
  };

  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>User Dashboard</h1>
        <p style={styles.welcome}>Welcome, <strong>user</strong>!</p>
        <p>Date: {currentDate}</p>
        <p>Time: {currentTime}</p>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    background: '#f0f2f5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '320px',
  },
  heading: {
    marginBottom: '1rem',
    color: '#333',
  },
  welcome: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  logoutButton: {
    marginTop: '1.5rem',
    padding: '0.5rem 1.2rem',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default UserDashboard;
