import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
} from '@mui/material'
import React from 'react'

const headingStyle = {
  fontWeight: 'bold',
  textShadow: `
    1px 1px 0 #ccc,
    2px 2px 0 #bbb,
    3px 3px 0 #aaa
  `,
  color: '#A52A2A', // brown
}

const AboutUs = () => {
  return (
    <Box sx={{ px: 4, py: 5, textAlign: 'center', backgroundColor: '#f0f4f8' }}>
      <Card
        sx={{
          maxWidth: 900,
          margin: '0 auto',
          p: 4,
          boxShadow: 6,
          borderRadius: 4,
          background: 'rgba(255, 255, 255, 0.9)',
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ ...headingStyle, fontFamily: 'Times New Roman, serif' }}
          >
            ST. JEMMA'S HSS
          </Typography>

          <Typography variant="h5" gutterBottom sx={headingStyle}>
            Laila, Belthangady
          </Typography>

          <Typography variant="h4" mt={4} gutterBottom sx={headingStyle}>
            Our School's History
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
            Established in [Year], [School Name] has a rich history of providing quality education to students from [area/community].
            Over the years, we have grown and evolved to meet the changing needs of our students and community.
          </Typography>

          <Typography variant="h4" mt={4} gutterBottom sx={headingStyle}>
            Inspiration
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
            "This school was born from a dream to create a space where every child could discover their potential and flourish.
            I believe that education is more than just textbooks; it's about nurturing character and fostering growth.
            Each child is unique, and with the right encouragement, they can achieve amazing things."
          </Typography>

          <Typography variant="h4" mt={4} gutterBottom sx={headingStyle}>
            Vision
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
            "Empowering students to become curious, creative, and compassionate leaders,
            prepared to make a positive impact in the world."
          </Typography>

          <Typography variant="h4" mt={4} gutterBottom sx={headingStyle}>
            Mission
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontStyle: 'italic' }}>
            "Our mission is to provide a nurturing and inclusive learning environment that fosters academic excellence,
            critical thinking, and social responsibility, enabling students to reach their full potential and become active contributors to society."
          </Typography>

          <Typography
            variant="h4"
            mt={5}
            gutterBottom
            sx={headingStyle}
          >
            Our School Provides:
          </Typography>

          <Grid container spacing={2} mt={1} justifyContent="center">
            {['/NCC.jpg', '/nss.jpg', '/sports.jfif'].map((src, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box
                  component="img"
                  src={src}
                  alt={`St. Jemma Activity ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Box>
  )
}

export default AboutUs
