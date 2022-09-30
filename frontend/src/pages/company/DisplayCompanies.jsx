import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCompanies } from '../../store/crud/actions';
import { useNavigate } from 'react-router-dom';

const DisplayCompanies = () => {
  let dispatch = useDispatch();
  let companies = useSelector((state) => state.crud.companies);
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCompanies());
    // eslint-disable-next-line
  }, []);

  const columns = [
    {
      field: '_id',
      headerName: 'ID',
      type: 'string',
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'name',
      headerName: 'Name',
      type: 'string',
      sortable: true,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
    },
    {
      field: 'action',
      headerName: 'Details',
      sortable: false,
      flex: 1,
      headerAlign: 'center',
      align: 'center',
      renderCell: (params) => {
        const onClick = (e) => {
          e.stopPropagation();

          const api = params.api;
          const thisRow = {};

          api
            .getAllColumns()
            .filter((c) => c.field !== '__check__' && !!c)
            .forEach((c) => (thisRow[c.field] = params.getValue(params.id, c.field)));
          return navigate(`/companies/${thisRow?._id}`);
        };

        return (
          <Button variant='contained' onClick={onClick}>
            View
          </Button>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: '90vh', width: '100%', overflow: 'scroll' }}>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={10} md={10} sx={{ my: '2vh' }}>
          <Typography>Companies</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} sx={{ my: '2vh' }}>
          <Button variant='contained' onClick={()=>navigate('/companies/create')}>Create</Button>
        </Grid>
      </Grid>
      {companies && (
        <DataGrid
          rows={companies}
          columns={columns}
          getRowId={(row) => row._id}
        />
      )}
    </Box>
  );
};

export default DisplayCompanies;
