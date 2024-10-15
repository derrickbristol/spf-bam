
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
export default function CloseRelatives ({handleFormData,values}) {

    const [error, setError] = useState(false);
     return (
    
    <>
    <nav
                    className="navbar "
                    style={{
                      backgroundColor: "#1f365c",
                      height: "25px",
                      padding: "0px",
                      // marginTop:"5px"
                    }}
                  >
                    <span className="navbar-text" style={{ color: "#fff", padding: "1px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Other Information about close relative
                    </span>
                  </nav>

                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label >Name of Spouse(if any)</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.NAMEOFSPOUSE}

                          onChange={handleFormData("NAMEOFSPOUSE")}
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
                        <Form.Label> Address of Spouse</Form.Label>
                        <Form.Control as="textarea" rows={2}
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.SPOUSERESIDENTIALADDRESS}
                          onChange={handleFormData("SPOUSERESIDENTIALADDRESS")}
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
                          <Form.Label>Contact Number of Spouse </Form.Label>
                          <Form.Control
                            style={{ border: error ? "2px solid red" : "" }}
                            type="text"
                            defaultValue={values.SPOUSECONTACTNUMBER}

                            onChange={handleFormData("SPOUSECONTACTNUMBER")}
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
                        <Form.Label >Name of person to be contacted in case of emergency</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.EMERGENCYCONTACTNAME}
                          onChange={handleFormData("EMERGENCYCONTACTNAME")}
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
                        <Form.Label >Contact Number in case of emergency</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.EMERGENCYCONTACTPHONE}
                          onChange={handleFormData("EMERGENCYCONTACTPHONE")}
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

 
