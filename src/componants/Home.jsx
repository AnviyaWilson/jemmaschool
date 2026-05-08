import { Button, AppBar, Toolbar, Typography, Box, Grid, Card, CardMedia, CardContent } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleLearnMore = () => {
    navigate('/admin/a'); // Route to About page
  };
  return (
<>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
      <div>
        {/* AppBar here */}<AppBar position="static" Color= 'brown' >
  <Toolbar sx={{ minHeight: '60px', position: 'relative' }}>
    <div
      style={{
        overflow: 'hidden',
        display: 'inline-block',
        whiteSpace: 'nowrap',
        animation: 'scroll 15s linear infinite',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: 'white',
      }}
    >
      Online Application for Plus One 2025 - 2026
    </div>
  </Toolbar>
</AppBar>

      {/* Emblem and Header */}
      <Box
        sx={{
          backgroundColor: 'rgba(248, 243, 243, 0.7)',
          padding: '25px',
          textAlign: 'center',
          marginTop: '10px',
       
        }}
      >
        <Grid container alignItems="center" justifyContent="center" spacing={2}>
          <Grid item>
            <img
              src="/emblem.jfif"
              alt="School Emblem"
              style={{ width: '150px', height: '150px', borderRadius: '100px', boxShadow: '2 4px 10px rgba(0,0,0,0.5)' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
             <Typography
            variant="h4"
              style={{
                color: 'dark brown',
                fontFamily:'Time New Roman,serif',
                fontWeight: 'bold',
                fontSize: '2.7rem',
              background: 'linear-gradient(to right, #8B4513, #FFD700)',
                WebkitBackgroundClip: 'text',
              
              }}
            >
              ST. JEMMA'S HIGHER SECONDARY SCHOOL
            </Typography>
            <Typography  variant="subtitle1" style={{ marginTop: '5px',  fontWeight: 'bold', }}><h3>Laila, Belthangady</h3></Typography>
            <Typography variant="subtitle2" style={{ marginBottom: '5px'  }}>Affiliated with Karnataka State Board</Typography>
            <Typography variant="body2"> 📞 0481-2441980 | 📧 jemmas.school@gmail.com</Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Welcome & Motto */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <h1
          style={{
            fontSize: '4.7rem',
            fontWeight: 'bold',
            color: 'light blue',
            letterSpacing: '2px',
           }}
        >
        
        </h1>
        <h2 style={{ fontStyle: 'italic', marginBottom: '30px' }}>
          OUR MOTTO - TRUTH & LOVE
        </h2>

        {/* School Image */}
        <img
          src="/st.jemma.jpeg"
          alt="St. Jemma School"
          style={{
            width: '150%',
            maxWidth: '1000px',
            borderRadius: '90px',
            boxShadow: '0 10px 25px rgba(10, 10, 10, 0.7)',
            marginBottom: '60px',
            border: '8px solid #FFD700',
          }}
        />

        {/* History Content */}
        <div
          style={{
            background: 'rgba(0,0,0,0.6)',
            borderRadius: '25px',
            padding: '35px',
            width: '85%',
            margin: 'auto', 
            fontSize: '1.2rem',
            lineHeight: '1.8',
            fontFamily: "'Georgia', serif",
            boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
            color: '#fff',
          }}

        ><h1>WELCOME</h1>
          Born out of the sagacious vision of the <b>'Sonia Sequera',</b> <b>St. JEMMA Higher Secondary School</b> has been a paragon of academic excellence in the seven decades of its existence.
          <br /><br />
          The school girdles the hillock where the St. Jemma's Cathedral stands majestically at Pattom in the teeming metropolis of Bangalore.
          <br /><br />
          Well shielded from the din and bustle of the city, <b>St. Jemma's</b> is one of the largest schools in Asia in terms of student strength. It has attained great heights of glory from its humble beginnings in 1940 with 12 teachers and 260 students in 9 classes.
          <br /><br />
          The institution was originally called <i>'Sachivothama Shashtyabadhapoorthy Memorial English High School'</i>. Shri A. Sankara Pillai was the first Headmaster.
        </div>

       <Grid container spacing={4} justifyContent="center" style={{ marginTop: '40px' }}>
          <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 640, borderRadius: '60px', boxShadow: 9 }}>
      <CardMedia
        component="img"
        height="500"
        image="/oppo.jfif"
        alt="More Opportunities"
      />
      <CardContent sx={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h6" fontWeight="bold">
        Computer Lab
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  {/* Principal Card */}
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 640, borderRadius: '60px', boxShadow: 6 }}>
      <CardMedia
        component="img"
        height="500"
        image="/cul.jfif"
        alt="Cultural Programes"
      />
      <CardContent sx={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h6" fontWeight="bold">Cultural Programes</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Vice Principal Card */}
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 640, borderRadius: '60px', boxShadow: 6 }}>
      <CardMedia
        component="img"
        height="500"
        image='/good.jfif'
        alt="Good Habits"
      />
      <CardContent sx={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h6" fontWeight="bold">Our Library</Typography>
      </CardContent>
    </Card>
  </Grid>

  {/* Staff Card */}
  <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth:640, borderRadius: '60px', boxShadow: 6 }}>
      <CardMedia
        component="img"
        height="500"
        image="/skill.jfif"
        alt="Skill Developing"
      />
      <CardContent sx={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h6" fontWeight="bold">Play Area</Typography>
      </CardContent>
    </Card>
  </Grid>
</Grid> <Grid item xs={12} sm={6} md={4}>
    <Card sx={{ maxWidth: 2000, borderRadius: '90px', boxShadow: 6 }}>
      <CardMedia
        component="img"
        height="1000"
        image='/fac.jfif'
        alt="Our Facilities"
      />
      <CardContent sx={{ textAlign: 'center', backgroundColor: '#f5f5f5' }}>
        <Typography variant="h6" fontWeight="bold">Our Facilities</Typography>
      </CardContent>
    </Card>
  </Grid>
{/* Learn More Button */}
         <Button
        variant="contained"
        onClick={handleLearnMore} // Add the click handler
        style={{
          marginTop: '40px',
          backgroundColor: '#FFD700',
          color: '#000',
          fontWeight: 'bold',
          padding: '10px 30px',
          fontSize: '1rem',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(114, 68, 68, 0.6)',
        }}
      >
        Learn More
      </Button> 
      </div>
    </div>
    </>
  );
};

export default Home;