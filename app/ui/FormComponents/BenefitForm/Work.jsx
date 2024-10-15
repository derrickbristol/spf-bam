
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
export default function Work ({handleFormData,values}) {

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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Work Situation and date chose for retirement
                    </span>
                  </nav>

                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label >Name of Last employer</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.LASTEMPLOYER}
                          onChange={handleFormData("LASTEMPLOYER")}
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
                        <Form.Label>Profession</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"

                          defaultValue={values.POSTTITLE}
                          onChange={handleFormData("POSTTITLE")}
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
                    <Col sm={4}>
                      <Form.Group className="mb-3">
                        <Form.Label >Total Years of employment</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.YEARSOFEMP}
                          onChange={handleFormData("YEARSOFEMP")}
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
                    <Col sm={4}>
                      <Form.Group className="mb-3">
                        <Form.Label> Last gross salary in SCR</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"

                          defaultValue={values.LASTGROSSSALARY}
                          onChange={handleFormData("LASTGROSSSALARY")}
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
                    <Col sm={4}>
                      <Form.Group className="mb-3">
                        <Form.Label> Last Working Date</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="date"

                          defaultValue={(Moment(values?.LASTWorkingDate).format("YYYY-MM-DD"))} 
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

 
