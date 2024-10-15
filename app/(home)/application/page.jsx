import React from 'react'
import Link from "next/link"

import { redirect } from 'next/navigation';
import {getSession} from '../../../lib';
import styles from "../../ui/application/application.module.css"
import { fetchApplications } from "../../lib/data";

import DataTable from "../../ui/DataTable/DataTable"

const Application = async ()=> {
 
  const session = await getSession()
console.log(session)
    if (!session) {
        redirect("/login")
      }
      const columns = [
        //  { field: 'ID', headerName: 'ID', width: 90 },
      
        {
          field: 'id',
          type:"string",
          headerName: 'No',
          width: 155,
          editable: true,
        },
       
        
         
        {
          field: 'LODGEDATE',
          type:"string",
          headerName: 'Lodge Date',
          width: 150,
          editable: true,
        },
        {
          field: 'MEMBERNIN',
          type:"string",
          headerName: 'NIN',
          width: 150,
          editable: true,
        },
        {
          field: 'SURNAME',
          type:"string",
          headerName: 'Surname',
          width: 150,
          editable: true,
        },
        {
          field: 'ONAMES',
          type:"string",
          headerName: 'Names',
          width: 150,
          editable: true,
        },
        {
          field: 'StageDescription',
          type:"int",
          headerName: 'Status',
          width: 700,
          editable: true,
        },

      ];
        const allApplications = await fetchApplications();

      const rows = allApplications.map((row) => {
        const { APPLCNNO, ...rest } = row;
        return { id: [APPLCNNO], ...rest };
      });


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link
           href={{
            pathname: "/application/add",
            //  query:{username:session.user.username}  // the data
             }}
        >
         <button className={styles.addButton}>Add New</button>
        </Link>



    
      </div>
          <DataTable slug="application" rowId='id'  columns={columns} rows={rows}/>
    </div>

    
  )
}


export default Application