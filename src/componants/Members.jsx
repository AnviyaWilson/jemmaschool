import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Box,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ViewStudent = () => {
  const [stu, setStu] = useState([]);
  const navigate = useNavigate();
  const handleSelect = (student) => {
  const emailData = {
    to: student.Email_id,
    subject: "🎉 You've Been Selected!",
    text: `Hello ${student.Name},

Congratulations! You have been selected for the ${student.Course} course.

Please check your student portal for further instructions.

Best regards,
St. Jemma High School`
  };

  axios.post("http://localhost:3000/send-email", emailData)
    .then((res) => {
      alert("Email sent successfully to " + student.Email_id);
    })
    .catch((err) => {
      console.error(err);
      alert("Failed to send email");
    });
};


  useEffect(() => {
    axios.get('http://localhost:3000/view')
      .then((res) => {
        setStu(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const delStu = (id) => {
    axios.delete(`http://localhost:3000/${id}`)
      .then((res) => {
        alert(res.data);
        window.location.reload(); // force reload
      })
      .catch((err) => console.error(err));
  };

  const updateStu = (val) => {
    navigate("/add", { state: { val } });
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #e1f5fe, #fce4ec)',
        py: 6,
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 4,
          borderRadius: 4,
          backgroundColor: '#fff',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#0d47a1' }}
        >
          👨‍🎓 Student Details
        </Typography>

        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#1976d2' }}>
              <TableRow>
                {[
                  'Name', 'DOB', 'Address', 'Blood Group',
                  'Course', 'Religion', 'Phone Number',
                  'Email ID', 'SSLC %', 'Actions'
                ].map((header, index) => (
                  <TableCell
                    key={index}
                    sx={{ color: 'white', fontWeight: 'bold', fontSize: 14 }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {stu.map((val, i) => (
                <TableRow
                  key={val._id}
                  sx={{
                    '&:hover': { backgroundColor: '#e3f2fd' },
                    transition: '0.3s',
                  }}
                >
                  <TableCell>{val.Name}</TableCell>
                  <TableCell>{val.DOB}</TableCell>
                  <TableCell sx={{ whiteSpace: 'pre-wrap' }}>{val.Address}</TableCell>
                  <TableCell>{val.BloodGroup}</TableCell>
                  <TableCell>{val.Course}</TableCell>
                  <TableCell>{val.Religion}</TableCell>
                  <TableCell>{val.PhoneNumber}</TableCell>
                  <TableCell>{val.Email_id}</TableCell>
                  <TableCell>{val.SSLCPercentage}</TableCell>
                 <TableCell>
  <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
    <Button
      variant="contained"
      color="error"
      size="small"
      onClick={() => delStu(val._id)}
      sx={{ textTransform: 'none', fontWeight: 'bold' }}
    >
      Delete
    </Button>

    <Button
      variant="contained"
      color="success"
      size="small"
      onClick={() => handleSelect(val)}
      sx={{ textTransform: 'none', fontWeight: 'bold' }}
    >
      Select
    </Button>
  </Box>
</TableCell>

                </TableRow>
              ))}
            </TableBody>

          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default ViewStudent;
