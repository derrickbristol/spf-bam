
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
import { FormControl } from "@mui/material";
export default function Declaration () {

    const [error, setError] = useState(false);
     return (
    
    <>
  <nav
                    className="navbar "
                    style={{
                      backgroundColor: "#1f365c",
                      height: "25px",
                      padding: "0px",
                      // marginTop:"5px",

                    }}
                  >
                    <span className="navbar-text" style={{ color: "#fff", padding: "1px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Relationship
                    </span>
                  </nav>
                  <div>
                    <input type="radio" id="dec1" name="dec1" value="Paneer" /> We have been legally married since
             
                  </div>

                
                  <div>
                    <input type="radio" id="dec2" name="dec2" value="Paneer" /> We had been common law
                  </div>
                 
    </>
  )
}

 
