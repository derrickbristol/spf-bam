import React from 'react'
import Link from "next/link"

import { redirect } from 'next/navigation';
import {getSession} from '../../../lib';
import styles from "../../ui/application/application.module.css"
import { fetchEnquiry } from "../../lib/data";

import DataTable from "../../ui/DataTable/DataTable"

const Enquiry = async ()=> {
 
  const session = await getSession()
console.log(session)
    if (!session) {
        redirect("/login")
      }
      const columns = [
        //  { field: 'ID', headerName: 'ID', width: 90 },
      
        {
            field: 'Date',
            type:"int",
            headerName: 'Date',
            width: 700,
            editable: true,
          },
        {
          field: 'EnquiryNIN',
          type:"string",
          headerName: 'NIN',
          width: 155,
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
          field: 'Type',
          type:"int",
          headerName: 'Type',
          width: 700,
          editable: true,
        },
        {
            field: 'Description',
            type:"int",
            headerName: 'Description',
            width: 700,
            editable: true,
          },
      

      ];
        const allEnquiries = await fetchEnquiry();

      const rows = allEnquiries.map((row) => {
        const { EnquiryId, ...rest } = row;
        return { id: [EnquiryId], ...rest };
      });


  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link
           href={{
            pathname: "/enquiry/add",
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


export default Enquiry