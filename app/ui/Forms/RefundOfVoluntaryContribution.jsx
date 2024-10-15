import React, { useState, useRef } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import "./step.css";

import Moment from "moment";
import { listener, startTablet } from "../../Topaz/SigWebTablet";
import ReactToPrint from "react-to-print"

import {
  Box,
  makeStyles,
  Divider,
  TextField,
  CardContent,
 } from '@material-ui/core';
import Identification from "../FormComponents/BenefitForm/Identification";
import RefundDetails from "../FormComponents/BenefitForm/RefundDetails";

import Payment from "../FormComponents/BenefitForm/Payment";
import Declaration from "../FormComponents/BenefitForm/Declaration";
import Header from "../FormComponents/BenefitForm/Header";
import OfficialUseLumpSum from '../FormComponents/BenefitForm/OfficialUseLumpSum'



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
 

const RefundOfVoluntaryContribution = ({ nextStep, handleFormData, handleSubmitVR,prevStep,appId, values,isDisabled }) => {
  //creating error state for validation
 //creating error state for validation
 const [error, setError] = useState(false);
 values.claimType="VR"
 

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
  //  sig.preventDefault();
 }

 const [showButton, setShowButton] = useState(true);
const [enableNext, setEnableNext] = useState(true);
 const toggleButton = () => {
   setShowButton(!showButton);
 };
 const [showSignButton, setShowSignButton] = useState(true);

 const toggleSigButton = () => {
   setShowSignButton(!showSignButton);
   setSigCaptured(null)
   setShowRetirementLetter(false)
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
         setEnableNext(false)
         handleSubmitVR()
 };

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
      
      {showRetirementLetter ? (
          <>
            <div  ref={componentRef}>
            <Card style={{ marginTop: 15, marginBottom: 15 }}>
              <Card.Body>
                  <Header handleFormData={handleFormData} values={values} appId={appId}/>
                 <Identification handleFormData={handleFormData} values={values}/>
                  <RefundDetails  handleFormData={handleFormData} values={values}/>
                 
                  <Payment handleFormData={handleFormData} values={values}/>
                  <Declaration/>
                 
                  <img src={sigCaptured?.image.src}/>
                  <OfficialUseLumpSum handleFormData={handleFormData} values={values}/>
                  
               
                  </Card.Body>
            </Card>
           
          
          </div>
          </>
        ) : (
          <div className="flex flex-col justify-center">
          <>
          <div  ref={componentRef}>
            <Card style={{ marginTop: 15, marginBottom: 15 }}>
                <Card.Body>
                    <Header handleFormData={handleFormData} values={values} appId={appId}/>
                    <Identification handleFormData={handleFormData} values={values}/>
                    <RefundDetails  handleFormData={handleFormData} values={values}/>
                   
                    <Payment handleFormData={handleFormData} values={values}/>
                    <Declaration/>


                    <Card align='center'>
                    {/* <CardHeader title='Capture Signature' /> */}
                    <Divider/>
                    <CardContent>
                      <Box p={5}>
                        <canvas id="cnv" name="cnv" width="400" height="100" />
                      </Box>
                      <form action="#" name="FORM1" >
                        {!sigCaptured?
                          <Button 
                            onClick={() => {
                              startTablet(handleSigCapture);
                            }}
                          >
                            Sign
                          </Button>
                          : 
                          <Button 


                          onClick={()=>setShowRetirementLetter(true)} 

                            // onClick={() => {
                            //   handleSig();
                            // }}
                          >
                            Done
                          </Button>
                        }
                
                          <TextField className={classes.textField} name="sigString" rows='20'  />
                       
              
                      </form>
                    </CardContent>
                  </Card>




                    <OfficialUseLumpSum handleFormData={handleFormData} values={values}/>
                  
                </Card.Body>
            </Card>
          </div>
          </>
          </div>
        )}


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

export default RefundOfVoluntaryContribution