
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Declaration
                    </span>
                  </nav>
                  <div>
                    <input type="checkbox" id="dec1" name="dec1" value="Paneer" /> I
                    declare that all the information provided are true and correct
                  </div>

                  <div>
                    <input type="checkbox" id="dec2" name="dec2" value="Paneer" /> I
                    agree for SPF to exchange my personal information with third party
                    authorities when processing my application to check the
                    correctness of all provided
                  </div>

                  <div>
                    <input type="checkbox" id="dec2" name="dec2" value="Paneer" /> The application form was signed off the Pension Fund premisses.
                  </div>
                 

    </>
  )
}

 
