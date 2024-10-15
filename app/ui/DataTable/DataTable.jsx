'use client'
import React, { useState } from 'react'
import './DataTable.scss'
// import edit from  "../assets/edit-pencil.png"
// import deleteIcon from "../assets/delete-bin-1.png"
// import {Link} from "react-router-dom"
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
//import Edit from '../../components/Edit/Edit'

const DataTable = (props) => {

  const handleDelete = id => {
    //delete the item
    // mutation.mutate(id)
  }
  
  
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: params => {
      return (
        <div className="action">
          {/* <div className="edit" >
            <Link to={`/${props.slug}/${params.row.id}`}>
              <img src={edit}  alt="" />
              
            </Link>
          </div> */}

          {/* <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img src={deleteIcon} alt="" />
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
    columns={[...props.columns]}
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