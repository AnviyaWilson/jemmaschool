import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.card}>
          <h1 style={styles.heading}>For Any Enquiry</h1>
          <p>ABC School</p>
          <p>Phone: 9191919178</p>
          <p>Email: jemmas.school@gmail.com</p>
          <p>Postal Address: ST.JEMMA'S HSS , Laila, Belthangady,Karnataka</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: "url('/SCHOOL.jfif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    fontFamily: 'Times New Roman, serif',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backdropFilter: 'blur(5px)',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '40px',
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    textAlign: 'center',
    maxWidth: '500px',
  },
  heading: {
    fontSize: '32px',
    marginBottom: '20px',
  },
};

export default ContactUs