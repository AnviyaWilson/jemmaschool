import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarUser from '../componants/NavbarUser';

const LayoutUser = () => {
  return (
    <div style={styles.container}>
      <NavbarUser />
      <main style={styles.main}>
        <Outlet />
      </main>
      {/* <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} User Portal. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: '#f9f9f9',
  },
  main: {
    flex: 1,
    padding: '2rem',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#e9ecef',
    color: '#555',
  },
};

export default LayoutUser;
