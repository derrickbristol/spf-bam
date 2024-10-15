import React, { useState, useRef } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
//import validator from "validator";
import "./step.css";

import Moment from "moment";
import logo from '../logo/SPFLogo.png'
import { listener, startTablet } from "../../Topaz/SigWebTablet";
import ReactToPrint from "react-to-print"

import {
  Box,
  makeStyles,
  Divider,
  TextField
 } from '@material-ui/core';
import Image from "next/image";




const useStyles = makeStyles((theme) => ({
  root: {},
  card: {
    boxShadow: theme.shadows[5],
    outline: 'none'
  },
  textField: {
    border: 1,
    background: 'grey',
    width: 500
  }

}));
const APRDG = ({ nextStep, handleFormData,handleSubmit, prevStep, values,appId,isDisabled  }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  values.claimType="DA"
  // after form submit validating the form data using validator
  const submitFormData = (e) => {
   
    e.preventDefault();
   
   
    // checking if value of first name and last name is empty show error else take to next step
    // if (validator.isEmpty(values.MEMADDR) ) {
    //   setError(true);
    //   console.log("slooo")
    // } else {
    //   nextStep();
    // }
  };

  const classes = useStyles();
  const [sigCaptured, setSigCaptured] = useState(null);

  listener()

  const handleSig = () => {
      console.log("Finish")
  }

  const handleSigCapture = (sig) => {
    let image = new Image();
    image.src = 'data:image/png;base64,' + sig;
    setSigCaptured({image, sig})
  }

  const [showButton, setShowButton] = useState(true);
 const [enableNext, setEnableNext] = useState(true);
  const toggleButton = () => {
    setShowButton(!showButton);
  };
  const [showSignButton, setShowSignButton] = useState(true);
  const toggleSigButton = () => {
    setShowSignButton(!showSignButton);
  };

  
  const handlePrint = () => {
    window.print();
  };
  const hide =event => {

    event.currentTarget.style.visibility = "hidden";
  console.log(event.currentTarget);

  };
  const handleClick = event => {
     event.currentTarget.disabled = true;
    event.currentTarget.style.visibility = "hidden";
    //// if (validator.isEmpty(values.MEMADDR) ) {
    //   //setError(true);
    //   console.log("slooo")
    // }
    // else{

          setEnableNext(false)
          handleSubmit()
    console.log('button clicked');
    // }
    

  };

 
  const printRef = React.useRef();
  const [showRetirementLetter, setShowRetirementLetter] = useState(false);

  const componentRef = useRef()


  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      padding: '10px 30px',
      cursor: 'pointer',

    },
    buttonDisabled: {
      padding: '10px 30px',
      cursor: 'not-allowed',
    },
    label: {
      display: 'inline-block',
      width: '150px',
      alignItems: 'right',
    },
  };





  
  return (
    <>
      <Container fluid>
        <div ref={componentRef}>
        
  <section id="contact" >
                <Form onSubmit={submitFormData}>


            <Card style={{ marginTop: 15, marginBottom: 15 }}>
              <Card.Body>

                <Row>
                  <Col md={3}>
                    <Image alt='' src={logo} width={100} height={80} />
                  </Col>
                  <Col md={9}>
                    <h2>Seychelles Pension Fund</h2>
                    <h5>Application for  a Pre or Post Retirement Death Gratuity</h5>
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Information about the deceased
                    </span>
                  </nav>

                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label >NIN NUMBER</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.MEMNIN}
                          disabled
                          readOnly
                          onChange={handleFormData("MEMNIN")}
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
                          defaultValue={values.ONAMES}
                          disabled
                          readOnly
                          onChange={handleFormData("SURNAME")}
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
                          defaultValue={values.SURNAME}
                          name="SURNAME"
                          disabled
                          readOnly
                          onChange={handleFormData("SURNAME")}
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


                          onChange={handleFormData("MAIDENNAME")}
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
                        <Form.Label >Full Residential Address</Form.Label>

                        <Form.Control as="textarea" rows={1}
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="MEMADDR"
                          
                          defaultValue={values.MEMADDR}
                          onChange={handleFormData("MEMADDR")}
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
                          defaultValue={values.GENDER}
                          disabled
                          readOnly
                          onChange={handleFormData("GENDER")}
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
                        <Form.Label>Place of Birth</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"


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
                        <Form.Label>Date of Death</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="BIRTHDATE"
                        //   defaultValue={(Moment(values?.BIRTHDATE).format("DD-MMMM-YYYY"))} 
                          // defaultValue={values.BIRTHDATE}
                       
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

                  </Row>

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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2.Work Situation
                    </span>
                  </nav>

                  <Row>
                    <Col sm={4}>
                      <Form.Group className="mb-3">
                        <Form.Label >Name of Last employer</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"

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
                    <Col sm={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Position held</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"


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
                  <Col sm={4}>
                  <Form.Label></Form.Label>
                  <div>
                    Self employed?  <input type="checkbox" id="dec2" name="dec2" value="Paneer" /> 
                  </div>
                </Col>
                  </Row>
               
                 
                


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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Information about the applicant
                    </span>
                  </nav>

                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label >NIN NUMBER</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          defaultValue={values.MEMNIN}
                          disabled
                          readOnly
                          onChange={handleFormData("MEMNIN")}
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
                          defaultValue={values.ONAMES}
                          disabled
                          readOnly
                          onChange={handleFormData("SURNAME")}
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
                          defaultValue={values.SURNAME}
                          name="SURNAME"
                          disabled
                          readOnly
                          onChange={handleFormData("SURNAME")}
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


                          onChange={handleFormData("MAIDENNAME")}
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
                        <Form.Label >Full Residential Address</Form.Label>

                        <Form.Control as="textarea" rows={1}
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="MEMADDR"
                          
                          defaultValue={values.MEMADDR}
                          onChange={handleFormData("MEMADDR")}
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
                        <Form.Label >Email</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="EMAIL"
                          defaultValue={values.EMAIL}
                          
                          onChange={handleFormData("EMAIL")}
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
                    <Col sm={2}>
                      <Form.Group className="mb-3">
                        <Form.Label >Gender</Form.Label>

                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"
                          name="GENDER"
                          defaultValue={values.GENDER}
                          disabled
                          readOnly
                          onChange={handleFormData("GENDER")}
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


                          onChange={handleFormData("PHONE")}
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
                        <div>
                        <input type="radio" id="dec1" name="dec1" value="Paneer" /> Post-Retirement Gratuity
                        </div>
                    </Form.Group>
                    </Col>
                    <Col sm={4}>
                    <Form.Group className="mb-3">
                        <div>
                        <input type="radio" id="dec2" name="dec1" value="Paneer" /> Pre-Retirement Gratuity
                        </div>
                    </Form.Group>
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm={4}>
                    <Form.Group className="mb-3">
                        <div>
                         <input type="radio" id="dec1" name="dec1" value="Paneer" /> Dependant
                        </div>
                    </Form.Group>
                    </Col>
                    <Col sm={4}>
                    <Form.Group className="mb-3">
                        <div>
                        <input type="radio" id="dec2" name="dec1" value="Paneer" /> Nominated Beneficiary
                        </div>
                    </Form.Group>
                    </Col>
                    <Col sm={4} ></Col>
                </Row>
                  <Row>
                    <Col>
                    <Form.Group className="mb-3">
                        <Form.Label>What was your relationship to the deceased</Form.Label>
                        <Form.Control
                          style={{ border: error ? "2px solid red" : "" }}
                          type="text"


                          onChange={handleFormData("PHONE")}
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



              
                  <nav
                    className="navbar "
                    style={{
                      backgroundColor: "#1f365c",
                      height: "25px",
                      padding: "0px",
                      // marginTop:"5px",

                    }}
                  >
                    <span className="navbar-text"  style={{ color: "#fff", padding: "1px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4. Gratuity Payment by direct debit
                    </span>
                  </nav>

                  <Row>
                    <Col sm={6}>
                      <Form.Group className="mb-3">
                        <Form.Label >Bank Details</Form.Label>

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
                        <Form.Label>Bank Accounts</Form.Label>
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
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 5. Declaration
                    </span>
                  </nav>
                  <div>
                    <input type="checkbox" id="dec1" name="dec1" value="Paneer" /> I
                    declare that all the information provided are true and correct
                  </div>

                  <div>
                    <input type="checkbox" id="dec2" name="dec2" value="Paneer" /> I
                    agree for SPF to exchange my personal information with third party
                    authorities when processing my application to check the
                    correctness of all provided
                  </div>
                 


                  <Divider />
                  {/* <CardContent> */}
                  <Box p={5}>
                    <canvas id="cnv" name="cnv" width="600" height="100" />
                    </Box>
         
                      
              <form action="#" name="FORM1" >
                {!sigCaptured ?
                 showSignButton && <button onClick={() => {startTablet(handleSigCapture);}} >Signature</button>
                :
                showButton && <button name="sigString" rows='20' onClick={toggleButton}>Done </button >
                }

                <div>
                 {showButton &&  <TextField className={classes.textField} name="sigString" rows='20'  />}
                </div>
                <label htmlFor="recDate">{Moment().format("DD-MMMM-YYYY")}<br></br><br></br></label>
        
              </form>


                  <Row>

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
                          <Form.Label >Customer Service Verification done by </Form.Label>

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
                  
                    <nav
                      className="navbar "
                      style={{
                        backgroundColor: " #f06628ff",

                        height: "25px",
                        padding: "0px",
                      }}
                    >
                      <span className="navbar-text" style={{ color: "#fff", padding: "0px" }}>

                        4294699&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4225037  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;info@spf.sc  &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;www.pensionfund.sc
                      </span>
                    </nav>
                  </Row>
     </Card.Body>
            </Card>
                </Form>

         
          </section>
        </div>
      </Container>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="primary" onClick={prevStep}>
          Previous
        </Button>
      <button type="submit" className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300" disabled={isDisabled}  style={isDisabled ? styles.buttonDisabled : styles.button} onClick={handleClick} >
        Save
      </button>
      <ReactToPrint trigger={() => <button disabled={enableNext ? true : false} className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}
        content={() => componentRef.current}
      />
        {/* <Button variant="primary" type="submit" onClick={nextStep}>
          Next
        </Button> */}
        <Button variant="primary" onClick={toggleSigButton}>
          Re-sign
        </Button>
        <button type="submit" onClick={nextStep} disabled={enableNext ? true : false}>Next</button>

      </div>
      
    </>
  );
};

export default APRDG