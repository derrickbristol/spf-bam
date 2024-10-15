import React from 'react'
import { redirect } from 'next/navigation';
import {getSession} from '../../lib';

const home = async ()=> {
 
    const session = await getSession()
  
      if (!session) {
          redirect("/login")
        }
      redirect("/dashboard")
  return (
 <></>
  )
}

export default home