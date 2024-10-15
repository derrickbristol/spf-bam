
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
export default function MedicalPractitioner ({handleFormData,values}) {

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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Information about your Medical Practitioner
                    </span>
                  </nav>

                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label >Name the hospital / clinic where you have seen the Medical Practitioner</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"

                          onChange={handleFormData("BANKDETAILS")}
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
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>.............................</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"


                          onChange={handleFormData("BANKACCOUNT")}
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
                  <Row>
                     <Col sm={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>If Specialist what field?</Form.Label>
                        <Form.Control
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
                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label >Telephone</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"

                          onChange={handleFormData("MedicalPhone")}
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
                    <Col sm={6}>
                    <Form.Group className="mb-3">
                        <Form.Label> Date you last saw that medical Practitioner</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="date"


                          onChange={handleFormData("LASTWorkingDate")}
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

 
