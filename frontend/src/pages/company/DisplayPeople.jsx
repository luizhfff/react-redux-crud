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
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const DisplayPeople = () => {
  let { companyId } = useParams();
  let { state } = useLocation();
  let navigate = useNavigate();
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/companies/${companyId}/people`)
      .then((data) => setPeople(data?.data))
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
        <Grid item xs={10} sm={10} md={10} sx={{ my: '2vh' }}>
          <Typography fontWeight={'bold'} textAlign='left' sx={{ ml: '20%' }}>
            Company: {state.companyName}
          </Typography>
        </Grid>
      </Grid>
      {people && people.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%' }} aria-label='table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {people.map((person) => (
                <TableRow key={person?._id}>
                  <TableCell scope='row' align='center'>
                    {person.name}
                  </TableCell>
                  <TableCell align='center'>
                    <Button variant='contained' onClick={() => navigate(`/people/${person?._id}`)}>
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>Company has no people associated with it</Typography>
      )}
    </Container>
  );
};

export default DisplayPeople;
