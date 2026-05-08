import React from 'react';

const AdminDashboard = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Welcome to the Admin Dashboard</h1>
        <p style={styles.subText}>This section is exclusively visible to administrators.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding: '2rem',
  },
  card: {
    background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
    borderRadius: '16px',
    padding: '3rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
    maxWidth: '600px',
    textAlign: 'center',
    animation: 'fadeIn 0.6s ease-in-out',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#333',
    fontWeight: '600',
  },
  subText: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
  },
};

// Optional animation injected into global style
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

export default AdminDashboard;
