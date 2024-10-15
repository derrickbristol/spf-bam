
import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from '../../assets/SPFLogo.png'
import Image from "next/image";
export default function Header ({values}) {

     return (
    <>
         <Row  style={{ width: '80%', marginLeft: "auto",marginRight: "auto" ,marginTop:50}}>
                 
                  <Col sm={2} >
                    <Image alt="" src={logo} width={100} height={80} />
                  </Col>
                
                  <Col sm={10}>
                    <h2>Seychelles Pension Fund</h2>
                    <h5>Checklist for processing of {values.BenefitLabel} </h5>
                    <h6>For Official use only</h6>
                  </Col>
                </Row>

    </>
  )
}

 