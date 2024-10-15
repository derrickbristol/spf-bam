
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Moment from "moment";
export default function Identification ({values}) {


     return (
    <>
    
    <Row className="pagebreak" style={{ width: '80%', marginLeft: "auto", fontWeight:"bold",marginRight: 20,marginTop:0 ,padding:20}}>
            {/* <Col md={2}>
              <label>Applicants:-</label>
              </Col> */}
              <Col>
              <label>{values?.MEMNIN}</label>
              </Col>
              <Col>
              <label>{values?.ONAMES}</label>
              </Col>
              <Col>
              <label> {values?.SURNAME}</label>
              </Col>
              <Col>
              {Moment().format("DD-MMM-YYYY")}
              </Col>
           

          </Row>

    </>
  )
}
