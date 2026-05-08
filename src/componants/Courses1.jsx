import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Paper,
} from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Courses1 = () => {
  const [courses, setCourses] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);
  const [editedCourse, setEditedCourse] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:3000/courses')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteCourse = (id) => {
    axios
      .delete(`http://localhost:3000/courses/${id}`)
      .then(() => {
        setCourses(courses.filter((course) => course._id !== id));
        alert('Course deleted successfully');
      })
      .catch((err) => console.error(err));
  };

  const updateCourse = (id) => {
    if (editingRowId === id) {
      axios
        .put(`http://localhost:3000/courses/${id}`, editedCourse)
        .then(() => {
          setCourses(courses.map((course) => (course._id === id ? editedCourse : course)));
          setEditingRowId(null);
          setEditedCourse({});
          alert('Course updated successfully');
        })
        .catch((err) => console.error(err));
    } else {
      const courseToEdit = courses.find((course) => course._id === id);
      setEditingRowId(id);
      setEditedCourse(courseToEdit);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #D3CCE3, #E9E4F0)',
        padding: '40px 20px',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 5,
          borderRadius: 4,
          backgroundColor: 'white',
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: '#4a148c',
          }}
        >
          🎓 Course Management Panel
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#7b1fa2' }}>
                {['Course Name', 'Description', 'Fee', 'Actions'].map((heading) => (
                  <TableCell
                    key={heading}
                    sx={{
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      textAlign: 'center',
                    }}
                  >
                    {heading}
                  </TableCell>
                ))}
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
                  <TableCell align="center">
                    {editingRowId === course._id ? (
                      <TextField
                        fullWidth
                        size="small"
                        value={editedCourse.Course}
                        onChange={(e) =>
                          setEditedCourse({ ...editedCourse, Course: e.target.value })
                        }
                      />
                    ) : (
                      <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>
                        {course.Course}
                      </Typography>
                    )}
                  </TableCell>

                  <TableCell align="center">
                    {editingRowId === course._id ? (
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        size="small"
                        value={editedCourse.Description}
                        onChange={(e) =>
                          setEditedCourse({ ...editedCourse, Description: e.target.value })
                        }
                      />
                    ) : (
                      course.Description.split('\n').map((line, index) => (
                        <Typography key={index} sx={{ fontSize: '14px' }}>
                          {line}
                        </Typography>
                      ))
                    )}
                  </TableCell>

                  <TableCell align="center">
                    {editingRowId === course._id ? (
                      <TextField
                        fullWidth
                        size="small"
                        value={editedCourse.Fee}
                        onChange={(e) =>
                          setEditedCourse({ ...editedCourse, Fee: e.target.value })
                        }
                      />
                    ) : (
                      <Typography sx={{ fontSize: '15px', fontWeight: 500 }}>
                        ₹ {course.Fee}
                      </Typography>
                    )}
                  </TableCell>

                  <TableCell align="center">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                      <Button
                        variant="contained"
                        onClick={() => updateCourse(course._id)}
                        sx={{
                          backgroundColor:
                            editingRowId === course._id ? '#43a047' : '#1e88e5',
                          '&:hover': {
                            backgroundColor:
                              editingRowId === course._id ? '#388e3c' : '#1565c0',
                          },
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '13px',
                          textTransform: 'none',
                        }}
                      >
                        {editingRowId === course._id ? 'Save' : 'Edit'}
                      </Button>

                      <Button
                        variant="outlined"
                        color="error"
                        onClick={() => deleteCourse(course._id)}
                        sx={{
                          fontWeight: 'bold',
                          fontSize: '13px',
                          textTransform: 'none',
                        }}
                      >
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Courses1;


