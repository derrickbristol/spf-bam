"use client"


import React from 'react'
import './DataTable.scss'

import Link from "next/link"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const DataTable = (props) => {


  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: params => {
      return (
        <div className="action">
          <div className="edit" >
            <Link  href={`/${props.slug}/${params.row.id}`}>
            <button>Issue</button>
            </Link>
          </div>

          {/* <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <image src={deleteIcon} alt="" />
            <button>Issue</button>
          </div> */}
        </div>
      )
    }
  }
  




  return (
    <div className='dataTable'>
    <DataGrid
    className='dataGrid'
    rows={props.rows}
    columns={[...props.columns, actionColumn]}
    initialState={{
      pagination: {
        paginationModel: {
          pageSize: 10,
        },
      },
    }}
    slots={{toolbar:GridToolbar}}
    slotProps={{
     toolbar:{
        showQuickFilter:true,
        quickFilterProps:{debounceMs:500}
      } 
    }}
    pageSizeOptions={[10]}
    checkboxSelection
    disableRowSelectionOnClick
    disableColumnFilter
    disableDensitySelector
    disableColumnSelector

  />
    </div>
  )
}

export default DataTable