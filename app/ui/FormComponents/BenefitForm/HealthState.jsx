
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
export default function HealthState ({handleFormData,values}) {

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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Information on your state of health
                    </span>
                  </nav>

                 
                  <Row>
                     <Col sm={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>List the illness or impairments that prevent you from working or limit you in your work. If you do not know the exact medical terms, describe the problem in your own words.</Form.Label>
                        <Form.Control as="textarea" rows={4}
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"


                          onChange={handleFormData("BANKADDRESS")}
                        />
                        {error ? (
                          <Form.Text style={{ color: "red" }}>
                            This is a required field
                          </Form.Text>
                        ) : (
                          ""
                        )}
                      </Form.Group>
                    </Col>
                  </Row>
                 
    </>
  )
}

 
