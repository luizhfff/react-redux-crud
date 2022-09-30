import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
} from '@mui/material';
import axios from 'axios';
import { deletePerson } from '../../store/crud/actions';

const DisplayPerson = () => {
  let { personId } = useParams();
  let navigate = useNavigate();
  const [person, setPerson] = useState();
  let dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/person/${personId}`)
      .then((data) => setPerson(data?.data))
      .catch((error) => console.error(error));
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2} md={2} sx={{ my: '2vh' }}>
          <Button variant='contained' onClick={() => navigate(-1)}>
            Back
          </Button>
        </Grid>
      </Grid>
      {person ? (
        <TableContainer component={Paper}>
          <Table sx={{ width: '100vw' }} aria-label='table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Company ID</TableCell>
                <TableCell align='center'>E-mail</TableCell>
                <TableCell align='center' colSpan={2}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell scope='row' align='center'>
                  {person.name}
                </TableCell>
                <TableCell align='center'>{person.companyId}</TableCell>
                <TableCell align='center'>{person.email}</TableCell>
                <TableCell align='center'>
                  <Button
                    variant='contained'
                    onClick={() => navigate(`/people/${person._id}/edit`, { state: { person } })}>
                    Edit
                  </Button>
                  <Button
                    variant='contained'
                    sx={{mx:'10%'}}
                    onClick={() => {
                      dispatch(deletePerson(person._id));
                      navigate(-1);
                    }}>
                    Delete
                  </Button>
                </TableCell>
                <TableCell align='center'>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>Person not found</Typography>
      )}
    </Container>
  );
};

export default DisplayPerson;
