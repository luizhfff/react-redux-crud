import React, { useState, useEffect } from 'react';
import { Alert, Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePerson } from '../../store/crud/actions';

const UpdatePerson = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { personId } = useParams();
  let { state } = useLocation();
  let companies = useSelector((state) => state.crud.companies);

  const [warningMsg, setWarningMsg] = useState('');
  const [name, setName] = useState('');
  const [companyId, setCompanyId] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    setName(state.person.name);
    setCompanyId(state.person.companyId);
    setEmail(state.person.email);
    // eslint-disable-next-line
  }, []);

  const handleSubmit = () => {
    if (name && companyId && email) {
      dispatch(
        updatePerson(personId, {
          name,
          companyId,
          email,
        })
      );
      setWarningMsg('');
      navigate(-1);
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
            Create New Person
          </Typography>
        </Grid>
      </Grid>
      <div>
        <TextField required label='Name' type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <TextField select required label='Company' value={companyId} onChange={(e) => setCompanyId(e.target.value)}>
          {companies.map((company) => (
            <MenuItem key={company._id} value={company._id}>
              {company.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField required label='E-mail' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <Button sx={{ my: '2vh' }} variant='contained' onClick={handleSubmit}>
          Edit
        </Button>
      </div>
    </Box>
  );
};

export default UpdatePerson;
