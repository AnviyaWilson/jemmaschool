import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHome from '../componants/NavbarHome';

const LayoutHome = () => {
  return (
    <div style={styles.container}>
      <NavbarHome />
      <main style={styles.main}>
        <Outlet />
      </main>
      
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#fefefe',
  },
  main: {
    flex: 1,
    padding: '2rem',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f0f0f0',
    color: '#333',
  },
};

export default LayoutHome;
