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
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

const DisplayCompany = () => {
  let { companyId } = useParams();
  let navigate = useNavigate();
  let companies = useSelector((state) => state.crud.companies);
  let company = companies.filter((company) => company?._id === companyId);

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
            Company Details
          </Typography>
        </Grid>
      </Grid>
      {company && company.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ width: '100%' }} aria-label='table'>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>Address</TableCell>
                <TableCell align='center'>Revenue</TableCell>
                <TableCell align='center'>Phone</TableCell>
                <TableCell align='center' colSpan={2}>
                  Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {company.map((company) => (
                <TableRow key={company?._id}>
                  <TableCell scope='row' align='center'>
                    {company.name}
                  </TableCell>
                  <TableCell align='center'>{company.address}</TableCell>
                  <TableCell align='center'>{company.revenue}</TableCell>
                  <TableCell align='center'>{company.phone}</TableCell>
                  <TableCell align='center'>
                    <Button
                      variant='contained'
                      onClick={() =>
                        navigate(`/companies/${company._id}/people`, { state: { companyName: company.name } })
                      }>
                      View People
                    </Button>
                  </TableCell>
                  <TableCell align='center' colSpan={2}>
                    <Button
                      variant='contained'
                      sx={{ mx: '10%' }}
                      onClick={() => navigate(`/companies/${company._id}/edit`, { state: { company } })}>
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography>Company not found</Typography>
      )}
    </Container>
  );
};

export default DisplayCompany;
