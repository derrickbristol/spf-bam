"use client"


import React from 'react'

import DataTable from '../../../ui/DataTable/DataTable'

const PaymentGrid = (props) => {

    const columns = [
        //  { field: 'ID', headerName: 'ID', width: 90 },
      
        {
          field: 'CONTRBNYR',
          type:"string",
          headerName: 'Year',
          width: 90,
          editable: true,
        },
       
        
         
        {
          field: 'Jan',
          type:"string",
          headerName: 'Jan',
          width: 90,
          editable: true,
        },
        {
          field: 'Feb',
          type:"string",
          headerName: 'Feb',
          width: 90,
          editable: true,
        },
      
     
        {
          field: 'Mar',
          type:"string",
          headerName: 'Mar',
          width: 90,
          editable: true,
        },
        {
          field: 'Apr',
          type:"string",
          headerName: 'Apr',
          width: 90,
          editable: true,
        },
        {
          field: 'May',
          type:"string",
          headerName: 'May',
          width: 90,
          editable: true,
        },
        {
          field: 'Jun',
          type:"string",
          headerName: 'Jun',
          width: 90,
          editable: true,
        },
        {
          field: 'Jul',
          type:"string",
          headerName: 'Jul',
          width: 90,
          editable: true,
        },
        {
          field: 'Aug',
          type:"string",
          headerName: 'Aug',
          width: 90,
          editable: true,
        },
        {
          field: 'Sep',
          type:"string",
          headerName: 'Sep',
          width: 90,
          editable: true,
        },
        {
          field: 'Oct',
          type:"string",
          headerName: 'Oct',
          width: 90,
          editable: true,
        },
        {
          field: 'Nov',
          type:"string",
          headerName: 'Nov',
          width: 90,
          editable: true,
        },
        {
          field: 'Dec',
          type:"string",
          headerName: 'Dec',
          width: 90,
          editable: true,
        },
  
      ];



  return (
   <>
           <div>
          <DataTable
            slug="Contribution"
            // getRowId={(row) => row?.CONTRBNYR}
            columns={columns}
            rows={props.rows}
          />
        </div>
   </>
  )
}

export default PaymentGrid