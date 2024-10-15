import React, { useState,useRef } from "react";
import Header from "./Header";
import Content from "./content";
import Signature from "./signature";
import SPFAddress from "./content";
import MemberAddress from "./SPFAddress";
import LetterHead from "./letterHead";
import {Grid, TextareaAutosize} from '@material-ui/core'
import ReactToPrint from "react-to-print"
import {
  makeStyles,
  Card,
  CardContent,
  Button,
  Box,
  Divider,
  TextField
 } from '@material-ui/core';
// import './App.css';
import {
  listener,
  startTablet
} from "../../../Topaz/SigWebTablet";
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


export default function LetterRetirement({data}) {
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
      <main className="m-5 p-5 md:max-w-xl md:mx-auto lg:max-w-2xl xl:max-w-4xl bg-white">
        {/* <ReactToPrint trigger={()=><button className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}
        
        
        content={()=>componentRef.current}
        /> */}
        {showRetirementLetter ? (
          <>
           {/* <button onClick={()=>setShowRetirementLetter(false)}  className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow 
                border-2 border-black-500 
                hover:bg-transparent hover:text-blue-500 transition-all duration-300">Edit</button> */}
           
          <div  ref={componentRef}>
             <Header handlePrint={handlePrint} />
            <MemberAddress data={data}/>
            <SPFAddress />
            <LetterHead data={data}/>
            <Content data={data} />
            <Image ALT="" src={sigCaptured?.image.src}/>
            <Signature data={data}/>
          
          </div>
          <ReactToPrint trigger={()=><button className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}
        
        
        content={()=>componentRef.current}
        /> 

          </>
        ) : (
           <div className="flex flex-col justify-center">
             <>
             <div className="p-5" ref={componentRef}>
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
      </main>
    </>
  );
}
