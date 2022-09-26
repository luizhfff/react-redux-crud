import React, { useState, useEffect } from 'react';
import { Alert, Box, Button, Grid, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateCompany } from '../../store/crud/actions';

const UpdateCompany = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { companyId } = useParams();
  let { state } = useLocation();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [revenue, setRevenue] = useState(0);
  const [phone, setPhone] = useState(0);
  const [warningMsg, setWarningMsg] = useState('');

  useEffect(() => {
    setName(state.company.name);
    setAddress(state.company.address);
    setRevenue(state.company.revenue);
    setPhone(state.company.phone);
    // eslint-disable-next-line
  }, []);

  const handleSubmit = () => {
    if (name && address && revenue && phone) {
      dispatch(
        updateCompany(companyId, {
          name,
          address,
          revenue,
          phone,
        })
      );
      setWarningMsg('');
      navigate('/companies');
    } else {
      setWarningMsg('Please fill out all required fields');
    }
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        my: '3vh',
      }}
      noValidate
      autoComplete='off'>
      {warningMsg && (
        <Alert sx={{ my: '2vh' }} severity='warning'>
          {warningMsg}
        </Alert>
      )}
      <Grid container spacing={2}>
        <Grid item xs={2} sm={2} md={2} sx={{}}>
          <Button variant='contained' onClick={() => navigate(-1)}>
            Back
          </Button>
        </Grid>
        <Grid item xs={10} sm={10} md={10} sx={{ my: '2vh' }}>
          <Typography fontWeight={'bold'} textAlign='left' sx={{ ml: '20%' }}>
            Create New Company
          </Typography>
        </Grid>
      </Grid>
      <div>
        <TextField
        required
          type='text'
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField required label='Address' type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      <div>
        <TextField
          required
          label='Revenue'
          type='number'
          value={revenue}
          onChange={(e) => setRevenue(e.target.value)}
        />
      </div>
      <div>
        <TextField required label='Phone' type='tel' value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <Button sx={{ my: '2vh' }} variant='contained' onClick={handleSubmit}>
          Edit
        </Button>
      </div>
    </Box>
  );
};

export default UpdateCompany;
