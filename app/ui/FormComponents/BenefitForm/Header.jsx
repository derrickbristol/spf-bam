
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
import logo from '../../logo/SPFLogo.png'
import Image from "next/image";
export default function Header ({handleFormData,values,appId}) {

    const [error, setError] = useState(false);
     return (
    <>

<Row  style={{ width: '100%', marginLeft: "auto",marginRight: "auto"}}>
                 
                  <Col sm={2} >
                    <Image src={logo} width={100} height={80} alt=""/>
                  </Col>
                
                  <Col sm={10}>
                    <h2>Seychelles Pension Fund</h2>
                    <h5>Application for {values.BenefitLabel} - {values.frequency}</h5>
                  </Col>
                </Row>

                <Row>
                  <Col sm={6}>
                    <Form.Group className="mb-3">
                      <Form.Label >Application Number</Form.Label>

                      <Form.Control
                        style={{ border: error ? "2px solid red" : "" }}
                        type="text"
                        value={appId}
                        disabled
                        name="APPLICATIONNO"
                        readOnly
                        // onChange={handleFormData("appId")}
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
                      <Form.Label>QAA Signature</Form.Label>
                      <Form.Control
                        style={{ border: error ? "2px solid red" : "" }}
                        type="text"

                        disabled
                        readOnly
                        onChange={handleFormData("age")}
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

 
