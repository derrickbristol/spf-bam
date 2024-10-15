
import React, { useState,useEffect,  useRef } from "react"
 import ScheduleTable from "../FormComponents/CheckList/ScheduleTable";
import Header from "../FormComponents/CheckList/Header";
 import Identification from "../FormComponents/CheckList/Identification";
 import CheckListItem from "../FormComponents/CheckList/CheckListItem";
 import {getUser} from '../../../lib'

import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import ReactToPrint from "react-to-print"
import { constants } from "buffer";

const CheckList =   ({values,nextStep,prevStep,handleFormData}) => {

  
  const [showRetirementLetter, setShowRetirementLetter] = useState(false);
  const BaseUrl = process.env.BASE_URL
  const componentRef = useRef()
  const [enableNext, setEnableNext] = useState(false);
  const initialQuery = { BENEFITTYPE: values.benefitType };
  const [query, setQuery] = useState(initialQuery);
  var CheckListUrl = BaseUrl + 'checklist'
 
  const [checkList, setCheckList] = useState([]);

  const getCheckListData = async () => {
    
    const reqData = {
      method: 'POST',
      body: JSON.stringify(query),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8'
      })

    }
    try {
      const fetchResponse = await fetch(CheckListUrl, reqData);
      const checkListData = await fetchResponse.json();
      setCheckList(checkListData);
      return checkListData;
    } catch (e) {
      return e;
    }
  };
  
  useEffect(() => {
    getCheckListData();
  });



  return (
    <>
    
    <Container fluid>
    {showRetirementLetter ? (
        <>

        <div ref={componentRef}>
          <section>
              <Header values={values}/>
              <Identification  values={values}/>
               <CheckListItem  values={values} checkList={checkList}/>
              <Identification  values={values}/>
              
              <ScheduleTable  values={values} /> 
          </section>
        </div>
      </>
    ):(
      <div className="flex flex-col justify-center">
        <>
        <div ref={componentRef}>
          <section  >
              <Header values={values}/> 
              <Identification  values={values}/>
              <CheckListItem  values={values} checkList={checkList}/>
              <Identification  values={values}/>
             
              <ScheduleTable  values={values} /> 
          </section>
        </div>
      
        </>
      </div>
    )} </Container>
   

    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button variant="primary" onClick={prevStep}>
        Previous
      </Button>
      <ReactToPrint  trigger={() => <button disabled={enableNext ? true : false} className="bg-blue-500 text-black font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300">print/Download</button>}
      content={() => componentRef.current}
    />
      <Button variant="primary" type="button" onClick={nextStep}>
        Next
      </Button>
    </div>

  </>
  )
}

export default CheckList
