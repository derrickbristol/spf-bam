
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
export default function RefundDetails ({handleFormData,values}) {
 
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Refund Details
                    </span>
                  </nav>


                  <Row>
                    <Col sm={12}>
                      <Form.Group className="mb-3">
                        <Form.Label >Balance Available</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          // defaultValue={values.VolMemAmount + values.VolMemAmount }
                          //onChange={handleFormData("BANKDETAILS")}
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
                        <Form.Label >Partial Refund</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.RefundAmount}
                          onChange={handleFormData("RefundAmount")}
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
                        <Form.Label>Full Refund</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          // defaultValue={values.RefundAmount}

                           onChange={handleFormData("RefundAmount")}
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
                        <Form.Label >Balance Remaininng (SCR)</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          //defaultValue={values.BANKDETAILS}
                         // onChange={handleFormData("BANKDETAILS")}
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

 
