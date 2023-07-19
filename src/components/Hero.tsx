"use client"
import React from 'react'
import { DataGrid, GridColDef,GridToolbar } from '@mui/x-data-grid';
import { data } from '@/data/data';

const columns: GridColDef[] = [
  {
    field: 'timeStamp',
    headerName: 'Timestamp',
    type: 'string',
    width: 120,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'purchaseId',
    headerName: 'Purchase ID',
    type: 'string',
    width: 120,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'fullName',
    headerName: 'Name',
    type: 'string',
    width: 200,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: '/',
    headerName: 'Source',
    type: 'string',
    width: 150,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'string',
    width: 150,
    headerAlign: 'center',
    align: 'center', 
  }
];

const Hero = () => {
  return (
    <div className='w-full h-[100vh] flex items-center justify-center bg-[#D4E2D4] z-[-1]'>
      <div className='w-[80%] bg-white rounded-lg z-10'>
        <DataGrid
        className='py-5 px-10'
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
          toolbar: {
              showQuickFilter: true,
              quickFilterProps:{debounceMs:500},
          }
      }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
      </div>
    </div>
  )
}

export default Hero