import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Box,
} from '@mui/material';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3000/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
    const intervalId = setInterval(fetchCourses, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #f3e5f5, #e1bee7)',
        py: 6,
        px: 2,
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 1100,
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
          sx={{
            fontWeight: 'bold',
            color: '#6a1b9a',
          }}
        >
          📘 Available Courses
        </Typography>

        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: '#8e24aa' }}>
              <TableRow>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                  Course
                </TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                  Description
                </TableCell>
                <TableCell sx={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>
                  Fee
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {courses.map((course) => (
                <TableRow
                  key={course._id}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#f3e5f5',
                    },
                  }}
                >
                  <TableCell sx={{ fontSize: 15 }}>{course.Course}</TableCell>
                  <TableCell sx={{ whiteSpace: 'pre-wrap', fontSize: 14 }}>
                    {course.Description}
                  </TableCell>
                  <TableCell sx={{ fontSize: 15 }}>₹ {course.Fee}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Courses;

