import { Box, Button, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCompanies } from '../store/crud/actions';

const Home = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCompanies());
    // eslint-disable-next-line
  }, []);

  return (
    <Box sx={{ my: '5vh' }}>
      <Grid>
        <Grid sx={{ my: '5vh' }}>
          <Button variant='contained' onClick={() => navigate('/companies/create')}>
            Create Company
          </Button>
        </Grid>
        <Grid>
          <Button variant='contained' onClick={() => navigate('/people/create')}>
            Create Person
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
