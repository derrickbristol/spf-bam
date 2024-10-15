import React, { useState,useRef } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";

import "./step.css";

import Moment from "moment";
// import logo from '../../logo/SPFLogo.png'
import {listener,startTablet} from "../../Topaz/SigWebTablet";
import ReactToPrint from "react-to-print"
// import {withStyles,Box,Divider} from '@material-ui/core';
 
import {
  Box,
  makeStyles,
  Divider,
  TextField,
  CardContent,
 } from '@material-ui/core';
import IdentificationDeceased from "../FormComponents/BenefitForm/IdentificationDeceased";
// import Identification from "../FormComponents/BenefitForm/Identification";
import CloseRelatives from "../FormComponents/BenefitForm/CloseRelatives";
import Work from "../FormComponents/BenefitForm/Work";
import Payment from "../FormComponents/BenefitForm/Payment";
import RelationshipDeceased from "../FormComponents/BenefitForm/RelationshipDeceased";
import Header from "../FormComponents/BenefitForm/Header";
import OfficialUse from '../FormComponents/BenefitForm/OfficialUse'
import BreakDownProRota from "../FormComponents/BenefitForm/BreakDownProRota";

import IdentificationSurvivingSpouse from "../FormComponents/BenefitForm/IdentificationSurvivingSpouse";
import InformationAboutTheDeceasedChildren from "../FormComponents/BenefitForm/InformationAboutTheDeceasedChildren"
import Declaration from "../FormComponents/BenefitForm/Declaration";


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

const SurvivingSpouse = ({ nextStep, handleFormData,handleSubmit, prevStep, values,appId,isDisabled  }) => {
  //creating error state for validation
  const [error, setError] = useState(false);
  values.claimType="DB"
  // after form submit validating the form data using validator
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
    // sig.preventDefault();
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
          handleSubmit()
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
         {/* <ReactToPrint trigger={()=><button className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}
              content={()=>componentRef.current}
        /> */}

        
        {showRetirementLetter ? (
          <>
            <div  ref={componentRef}>
              
            <Card style={{ marginTop: 15, marginBottom: 15 }}>
              <Card.Body>
                  <Header handleFormData={handleFormData} values={values} appId={appId}/>
                 <IdentificationDeceased handleFormData={handleFormData} values={values}/>
                  {/* <CloseRelatives  handleFormData={handleFormData} values={values}/> */}
                  <RelationshipDeceased/>
                  <IdentificationSurvivingSpouse/>
                  <InformationAboutTheDeceasedChildren/>
                  <Payment handleFormData={handleFormData} values={values}/>
                  <RelationshipDeceased/>
                  <Declaration/>
                  <img src={sigCaptured?.image.src}/>
                  <OfficialUse handleFormData={handleFormData} values={values}/>
                  
                  <BreakDownProRota handleFormData={handleFormData} values={values} />
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
                    <IdentificationDeceased handleFormData={handleFormData} values={values}/>
                    <RelationshipDeceased/>
                    <IdentificationSurvivingSpouse handleFormData={handleFormData} values={values}/>
                    {/* <CloseRelatives  handleFormData={handleFormData} values={values}/> */}
                    <InformationAboutTheDeceasedChildren />
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
                    <OfficialUse handleFormData={handleFormData} values={values}/>
                    <BreakDownProRota handleFormData={handleFormData} values={values} />
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

                <Button variant="primary" type="submit" onClick={nextStep}>
                  Next
                </Button>

                
              </div>
  <ReactToPrint trigger={()=><button className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}
          content={()=>componentRef.current}
        />
    </>
  );
};

export default SurvivingSpouse