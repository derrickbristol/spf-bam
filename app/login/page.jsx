import React from 'react'
import styles from "./login.module.css" 
import {  login  } from "../../lib";

const Loginpage = () => {
  return (
<div className={styles.container}>
      <form className={styles.form}
        action={async (formData) => {
          "use server";
          await login(formData);
          
        }}
      >
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <br />
        <button type="submit">Login</button>
        
      </form>
      </div>
  )
}

export default Loginpage
