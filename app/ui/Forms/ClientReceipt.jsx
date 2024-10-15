import React, { useState,useRef } from "react";
import {  Col, Row, Container, Button } from "react-bootstrap";

import "./step.css";

import Moment from "moment";
import logo from '../logo/SPFLogo.png'
import {listener,startTablet} from "../../Topaz/SigWebTablet";
import ReactToPrint from "react-to-print"
import {withStyles} from '@material-ui/core';
import Image from "next/image";
 

const ClientReceipt = ({ nextStep, handleFormData, prevStep, values,appId}) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    nextStep();
    // checking if value of first name and last name is empty show error else take to next step
    // if (validator.isEmpty(values.age) || validator.isEmpty(values.email)) {
    //   setError(true);
    // } else {
    //   nextStep();
    // }
  };


  // const { CONTACTTEL, EMAILADDR, placeofBirth, MEMNIN, MEMADDR } = data;

  
  const [sigCaptured, setSigCaptured] = useState(null);
  





const [showRetirementLetter, setShowRetirementLetter] = useState(false);

const componentRef= useRef()


const classes = withStyles();

listener()




const handleSigCapture = (sig) => {
  let image = new Image();
  image.src = 'data:image/png;base64,' + sig;
  setSigCaptured({image, sig})
}
  

  return (
    <>
      <Container fluid>
      <main className="m-2 p-2 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white">
        
        {/* header */}
        <div  className="p-3" ref={componentRef}>
        <header >
        <div  style={{margin: "10px" }}>
        <Row>
          <Col sm={1} >
            <Image alt=''src={logo} width={100} height={80} />
          </Col>
          <div  style={{padding: "10px" }}>
          <Col> <h6 >
                Seychelles Pension Fund
                </h6>
                <h6>
                  P.O.Box 576
              </h6>
          </Col>
          </div>
        </Row >

          </div>
          <div>
            <h6 className="header" >
              Confirmation of application of {values?.BenefitLabel} benefits
            </h6>
          </div>
         
        </header>
        {/* end of headder */}

        {/* Identification */}

        <section className="flex flex-col items-start justify-start font-bold">
         <ul>
           
            <li><span >Application No: </span> {appId}</li>
            <li><span>Member Name: </span>{values?.ONAMES}{values?.SURNAME}</li>
            <li><span>NIN:</span>{values?.MEMNIN}</li>
            <li><span>Address: </span>{values?.MEMADDR}</li>
            <li><span>Officer: </span>{window.$loginname}</li>
         </ul>
        </section>

        {/* end of Identification */}

        {/* content */}
        <section className='m-2'>
          
        <p>   This document is a confirmation that you have lodged an application to benefit with a  normal  retirement pension on the <strong>{(Moment(new Date()).format("DD-MMMM-YYYY"))}</strong>.</p>
        <p>   In case of any queries do not hesitate to contact the Customer Relation section on 4294699 </p>
        
        </section>
        </div>
        <ReactToPrint trigger={()=><button className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}
          content={()=>componentRef.current}
        />
       </main>
      </Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="primary" onClick={prevStep}>
          Previous
        </Button>

        <Button variant="primary" type="button" onClick={nextStep}>
          Next
        </Button>

      </div>

    </>
  );
};

export default ClientReceipt