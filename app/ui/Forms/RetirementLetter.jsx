


import Header from "../FormComponents/RetirementLetterComponent/Header";
import Content from "../FormComponents/RetirementLetterComponent/content";
import Signature from "../FormComponents/RetirementLetterComponent/signature";
import SPFAddress from "../FormComponents/RetirementLetterComponent/SPFAddress";
import MemberAddress from "../FormComponents/RetirementLetterComponent/MemberAddress";
import LetterHead from "../FormComponents/RetirementLetterComponent/letterHead";

import React, { useState,useRef } from "react";
import {  Card,  Container, Button } from "react-bootstrap"

import ReactToPrint from "react-to-print"
import {
  makeStyles,
  
  CardContent,
  Box,
  Divider,
  TextField
 } from '@material-ui/core';
// import './App.css';
import {
  listener,
  startTablet
} from "../../Topaz/SigWebTablet";
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



export default function RetirementLetter({ nextStep, handleFormData, prevStep, data }) {
  const [showRetirementLetter, setShowRetirementLetter] = useState(false);

  const componentRef= useRef()


  const classes = useStyles();
  const [sigCaptured, setSigCaptured] = useState(null);
  
  listener()

  const handleSig = () => {

  }

  const handleSigCapture = (sig) => {
    let image = new Image();
    image.src = 'data:image/png;base64,' + sig;
    setSigCaptured({image, sig})
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Container fluid>
        
      {/* <main className=" md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white"> */}
       
      {showRetirementLetter ? (
          <>
          <div >
            <div   ref={componentRef}>
            <div style={{ marginTop: 100, marginBottom: 15, marginLeft: 80, marginRight: 20  }}>
              <Card.Body>
                <Header handlePrint={handlePrint} />
                <MemberAddress data={data}/>
                <SPFAddress />
                <LetterHead data={data}/>
                <Content data={data} />
                <Image alt="" src={sigCaptured?.image.src}/>
                <Signature data={data}/>
                </Card.Body>
           </div>
            </div>
          </div>
          
          <ReactToPrint trigger={()=><button className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}

        
        content={()=>componentRef.current}
        /> 

          </>
        ) : (
           <div >
             <>

             <div ref={componentRef}>
                <Header handlePrint={handlePrint} />
                <MemberAddress data={data}/>
                <SPFAddress />
                <LetterHead data={data}/>
                <Content data={data} />
              
     
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
                <Signature data={data}/>
             </div>

            </>
           </div>
        )}

      </Container>




      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="primary" onClick={prevStep}>
          Previous
        </Button>
        <ReactToPrint trigger={() => <button  className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}
        content={() => componentRef.current}
      />
        <Button variant="primary" type="button" onClick={nextStep}>
          Next
        </Button>
      </div>
                
   </>
  )
}
