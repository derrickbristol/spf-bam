
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
export default function OfficialUseIncapacity ({handleFormData,values}) {

    const [error, setError] = useState(false);
     return (
    
    <>
 <div>
                      <nav
                        className="navbar  mb-3"
                        style={{
                          backgroundColor: " #f06628ff",

                          height: "25px",
                          padding: "0px",
                        }}
                      >
                        <span className="navbar-text" style={{ color: "#fff", padding: "1px" }}>
                          FOR OFFICIAL USE ONLY
                        </span>
                      </nav>
                    </div>
                    <Row>
                      <Col sm={9}>
                        <Form.Group className="mb-3">
                          <Form.Label >Application Received By</Form.Label>

                          <Form.Control
                            style={{ border: error ? "2px solid red" : "" }}
                            type="text"
                            value={window.$loginname}
                            onChange={handleFormData("ApplicationRecBy")}
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
                      <Col sm={3}>
                        {/* <label htmlFor="exampleFormControlInput1" className="form-label small">
                          Date
                        </label> */}
                        <Form.Label >Date Received<br></br></Form.Label>

                        <Form.Label >{Moment().format("DD-MMMM-YYYY")}</Form.Label>

                        {/* <Form.Control
                          type="date"
                          //value={data.BANKACCOUNT}
                         
                          // defaultValue={Moment().format("DD-MMMM-YYYY")}
                          name="ApplicationReceivedDate"
                        //onChange={handleChange}
                        // required
                        /> */}
                      </Col>
                    </Row>


 

                    <Row>
                      <Col sm={9}>
                        <Form.Group className="mb-3">
                          <Form.Label >Application Processed By</Form.Label>

                          <Form.Control
                            style={{ border: error ? "2px solid red" : "" }}
                            type="text"

                            onChange={handleFormData("ApplicationProBy")}
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
                      <Col sm={3}>
                        <label htmlFor="exampleFormControlInput1" className="form-label small">
                          Date
                        </label>
                        <Form.Control
                          type="date"
                          //value={data.BANKACCOUNT}
                          name="ApplicationReceivedDate"
                        //onChange={handleChange}
                        // required
                        />
                      </Col>
                    </Row>



                    <Row>
                      <Col sm={9}>
                        <Form.Group className="mb-3">
                          <Form.Label >Benefit Section Verification done By</Form.Label>

                          <Form.Control
                            style={{ border: error ? "2px solid red" : "" }}
                            type="text"

                            onChange={handleFormData("ApplicationVerBy")}
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
                      <Col sm={3}>
                        <label htmlFor="exampleFormControlInput1" className="form-label small">
                          Date
                        </label>
                        <Form.Control
                          type="date"
                          //value={data.BANKACCOUNT}
                          name="ApplicationReceivedDate"
                        //onChange={handleChange}
                        // required
                        />
                      </Col>
                    </Row>


                    <Row>
                      <Col sm={9}>
                        <Form.Group className="mb-3">
                          <Form.Label >From</Form.Label>

                          <Form.Control
                            style={{ border: error ? "2px solid red" : "" }}
                            type="text"

                            onChange={handleFormData("ApplicationApprovedBy")}
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
                      <Col sm={3}>
                        <label htmlFor="exampleFormControlInput1" className="form-label small">
                          To
                        </label>
                        <Form.Control
                          type="date"
                          //value={data.BANKACCOUNT}
                          name="ApplicationReceivedDate"
                        //onChange={handleChange}
                        // required
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col sm={9}>
                        <Form.Group className="mb-3">
                          <Form.Label >Application Approved By</Form.Label>

                          <Form.Control
                            style={{ border: error ? "2px solid red" : "" }}
                            type="text"

                            onChange={handleFormData("ApplicationApprovedBy")}
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
                      <Col sm={3}>
                        <label htmlFor="exampleFormControlInput1" className="form-label small">
                          Date
                        </label>
                        <Form.Control
                          type="date"
                          //value={data.BANKACCOUNT}
                          name="ApplicationReceivedDate"
                        //onChange={handleChange}
                        // required
                        />
                      </Col>
                    </Row>

    </>
  )
}

 
