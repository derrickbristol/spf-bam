
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
export default function Identification ({handleFormData,values}) {

    const [error, setError] = useState(false);
     return (
    
    <>
     <nav
                    className="navbar"
                    style={{
                      backgroundColor: "#1f365c",
                      height: "25px",
                      padding: "0px",
                      // marginTop:"5px"

                    }}
                  >
                    <span className="navbar-text" style={{ color: "#fff", padding: "1px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Information about the surviving spouse
                    </span>
                  </nav>

                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label >NIN NUMBER</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          
                        
                        
                          // onChange={handleFormData("MEMNIN")}
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
                        <Form.Label >Given Names</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="ONAMES"
                          // defaultValue={values.ONAMES}
                          // disabled
                          // readOnly
                          // onChange={handleFormData("SURNAME")}
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
                        <Form.Label>FAMILY NAME</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          // defaultValue={values.SURNAME}
                          name="SURNAME"
                          // disabled
                          // readOnly
                          // onChange={handleFormData("SURNAME")}
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
                        <Form.Label>His or Her Family name at Birth</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          // defaultValue={values.SURNAME}

                          // onChange={handleFormData("MAIDENNAME")}
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
                        <Form.Label >Permanent address at the time of death</Form.Label>

                        <Form.Control as="textarea" rows={2}
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="MEMADD"
                          
                          // defaultValue={values.MEMADDR}
                          // onChange={handleFormData("MEMADDR")}
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
                        <Form.Label >Current Address if different</Form.Label>

                        <Form.Control as="textarea" rows={2}
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="MEMADD"
                          
                          // defaultValue={values.MEMADDR}
                          // onChange={handleFormData("MEMADDR")}
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
                        <Form.Label >Telephone Number Home/Office</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="EMAIL"
                          // defaultValue={values.EMAILADDR}
                          
                          // onChange={handleFormData("EMAILADDR")}
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
                    <Col sm={2}>
                      <Form.Group className="mb-3">
                        <Form.Label >Gender</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="GENDER"
                          // defaultValue={values.GENDER}
                          // disabled
                          // readOnly
                          // onChange={handleFormData("GENDER")}
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
                   
                    {/* <Col sm={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Place of Birth</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"

                          defaultValue={values.PLACEOFBIRTH}
                          onChange={handleFormData("PLACEOFBIRTH")}
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
                      <Form.Group className="mb-3">
                        <Form.Label>Date of Birth</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="BIRTHDATE"
                          defaultValue={(Moment(values?.BIRTHDATE).format("DD-MMMM-YYYY"))} 
                          // defaultValue={values.BIRTHDATE}
                          readOnly
                          disabled
                          onChange={handleFormData("BIRTHDATE")}
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
                      <Form.Group className="mb-3">
                        <Form.Label>Telephone Number</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.CONTACTTEL}

                          onChange={handleFormData("CONTACTTEL")}
                        />
                        {error ? (
                          <Form.Text style={{ color: "red" }}>
                            This is a required field
                          </Form.Text>
                        ) : (
                          ""
                        )}
                      </Form.Group>
                    </Col> */}

                  </Row>

    </>
  )
}

 
