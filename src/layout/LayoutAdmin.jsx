import { Outlet } from 'react-router-dom';
import NavbarAdmin from '../componants/NavbarAdmin';
import  React from 'react';

const LayoutAdmin = () => {
  
  
  return (
    <div style={styles.wrapper}>
      <NavbarAdmin />
      <main style={styles.mainContent}>
        <div>
          <Outlet />
        </div>
      </main>
      {/* <footer style={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} <strong>Admin Panel</strong>. All rights reserved.
        </p>
      </footer> */}
    </div>
  );
};

const styles = {
  
  
  contentCard: {
    width: '100%',
    maxWidth: '900px',
    background: 'rgba(255, 255, 255, 0.92)',
    borderRadius: '20px',
    padding: '2.5rem',
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    animation: 'fadeIn 0.5s ease-in-out',
  },
  footer: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#343a40',
    color: '#f1f1f1',
    fontSize: '0.95rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
};

// Global fade-in animation
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    } 
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleSheet);

export default LayoutAdmin;
