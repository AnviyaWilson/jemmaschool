import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    Name: '',
    DOB: '',
    Address: '',
    BloodGroup: '',
    Course: '',
    Religion: '',
    PhoneNumber: '',
    Email_id: '',
    SSLCPercentage: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (location.state !== null) {
      setInputs({ ...location.state.val });
    }
  }, []);

  const submitHandler = () => {
    const url = location.state !== null
      ? `http://localhost:3000/${location.state.val._id}`
      : 'http://localhost:3000';

    const method = location.state !== null ? axios.put : axios.post;

    method(url, inputs)
      .then((res) => {
        alert(res.data);
        navigate('/user/h');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundImage: "url('/st.jemma.jpeg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        py: 5,
        px: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Overlay color
          backdropFilter: 'blur(6px)',           // Blur effect
          zIndex: 1,
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 900,
          width: '100%',
          p: 3,
          boxShadow: 10,
          backgroundColor: 'rgba(255,255,255,0.9)',
          zIndex: 2,
          position: 'relative',
        }}
      >
        <CardContent>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              fontFamily: 'Times New Roman, serif',
              fontWeight: 'bold',
              textShadow: '3px 3px 0 #ccc, 5px 5px 0 #999',
              color: '#2d3436',
              mb: 4,
            }}
          >
            Registration Form
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" name="Name" value={inputs.Name} onChange={inputHandler} />
            </Grid>&nbsp; &nbsp; &nbsp; &nbsp; 
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="DOB"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={inputs.DOB}
                onChange={inputHandler}
              />
            </Grid>&nbsp; &nbsp; &nbsp;  &nbsp; 

            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Address" name="Address" value={inputs.Address} onChange={inputHandler} />
            </Grid><br /><br />

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth  sx={{ minWidth: 220 }}>
                <InputLabel id="blood-group-label"> Blood Group</InputLabel>
                <Select label="Blood Group" name="BloodGroup" value={inputs.BloodGroup}  onChange={inputHandler}  inputProps={{
                 'aria-labelledby': 'blood-group-label',
                 }}>
                  {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map((bg) => (
                    <MenuItem value={bg} key={bg}>{bg}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>&nbsp; &nbsp; &nbsp;  &nbsp; 

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth sx={{ minWidth: 167}}>
                <InputLabel id="blood-group-label">Course</InputLabel>
                <Select name="Course" value={inputs.Course} label="Course" onChange={inputHandler}  inputProps={{
                 'aria-labelledby': 'blood-group-label',
                 }}>
                  {['Science', 'Commerce', 'Arts'].map((course) => (
                    <MenuItem value={course} key={course}>{course}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>&nbsp; &nbsp; &nbsp; &nbsp;

            <Grid item xs={12} sm={4}>
              <FormControl fullWidth sx={{ minWidth: 200 }}>
                <InputLabel id="blood-group-label">Religion</InputLabel>
                <Select name="Religion" value={inputs.Religion} label="Religion" onChange={inputHandler} inputProps={{
                 'aria-labelledby': 'blood-group-label',
                 }}>
                  {['Hindu', 'Muslim', 'Christian', 'Other'].map((religion) => (
                    <MenuItem value={religion} key={religion}>{religion}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Phone Number"
                name="PhoneNumber"
                type="tel"
                value={inputs.PhoneNumber}
                onChange={inputHandler}
              />
            </Grid>&nbsp; &nbsp; &nbsp;&nbsp;

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Email ID"
                name="Email_id"
                type="email"
                value={inputs.Email_id}
                onChange={inputHandler}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="SSLC Percentage"
                name="SSLCPercentage"
                value={inputs.SSLCPercentage}
                onChange={inputHandler}
              />
            </Grid>&nbsp; &nbsp; &nbsp;&nbsp;
            
          </Grid>

          <Box mt={4} display="flex" justifyContent="center">
            <Button variant="contained" size="large" sx={{ px: 5 }} onClick={submitHandler}>
              Submit
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;