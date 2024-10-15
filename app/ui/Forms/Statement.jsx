"use client"
import {fetchStatement} from '../../lib/data'
import {useFormState} from 'react-dom'
import { useState } from 'react'

import axios from 'axios';
import { Form, Card, Button,Row,Col } from "react-bootstrap";
import PaymentGrid from '../FormComponents/statement/PaymentGrid';
import PaymentSummary from '../FormComponents/statement/PaymentSummary';


const BaseUrl = process.env.BASE_URL

export async function FormSubmit (prevState,formData){
  return(fetchStatement(formData))
 }


const Statement = ({nextStep,values,handleFormData}) => {

  const [frequencyPayment,setFrequencyPayment]= useState("")

  const onFrequencyPaymentChange = e => {
    values.frequency=(e.target.value)
    setFrequencyPayment(e.target.value)
  }

  const [benefit, setBenefit] = useState();

  const handleBenefitChange = (e) => {
    values.BenefitLabel = (e.target.value)
    const selectedOptionObject = benefitList.find((benfit) => benfit.BNTYPEDESC === e.target.value);
    values.benefitType= selectedOptionObject.BENTYPEID
  //  console.log(values)
    // setErrorBenefit(false)
   };

    const [data, CreateStatement] = useFormState(FormSubmit,null)
    
    const NextLevel = () => {
      // e.preventDefault();
     
      console.log(frequencyPayment);
   
          nextStep();
    };

    let  details,gridData,dataSummary,benefitList=[]
    // let  gridData=[];
    // let  dataSummary=[];
    if (data!=null){
      
          details=(data[0][0]);
          gridData=data[1];
          dataSummary=data[2][0];
          benefitList=data[3]
          values.MEMNIN=details?.MEMNIN
          values.SURNAME=details?.SURNAME
          values.GENDER=details?.GENDER
          values.BIRTHDATE=details?.BIRTHDATE
          values.ONAMES=details?.ONAMES
          values.MEMADD=details?.MEMADD
          values.MEMBERID=details?.MEMBERID
    }


    let rows={};

    const fillRows=()=>{
      rows = gridData?.map((row) => {
        const { CONTRBNYR, ...rest } = row;
        return { id: CONTRBNYR, ...rest };
      });

      if (rows == undefined) {
        rows = {};
      }

      return rows;
    }

   

  return (
    <div>

    
    <Card>
      <Card.Body>
        <Form action={CreateStatement}>
          <Row>
            <Col sm={2}>
              <Form.Label> Interest Periiod</Form.Label>
            </Col>
            <Col sm={2}>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{}}
                  type="month"
                  name="interestPeriod"

                  // onChange={handleNewChange("stringPeriod")}
                />
              </Form.Group>
            </Col>
            <Col sm={1}>
              <Form.Label> NIN</Form.Label>
            </Col>
            <Col md={3}>
              <Form.Group className="mb-3">
                <Form.Control
                  style={{}}
                  name="NIN"
                  type="text"
                  id="NIN"
                  placeholder="Please Enter NIN"
                  //  defaultValue={details?.MEMNIN}
                  // onChange={handleNewChange("MEMNIN")}
                  // onKeyDown={handleChangeNIN}
                />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>

        <Row>
          <Row></Row>

          <Col md={3}>
            <label>{details?.MEMNIN}</label>
          </Col>
          <Col md={3}>
            <label> {details?.SURNAME}</label>
          </Col>
          <Col md={3}>
            <label>{details?.ONAMES}</label>
          </Col>
        </Row>

        <PaymentGrid rows={fillRows()}/>
        <div>
                  {dataSummary?.qualifyMsg}
        </div>

        <PaymentSummary dataSummary={dataSummary}/>

       
        <Row>
          <Col sm={4}>
            <Form.Group className="mb-3">
              <div>
                <label>
                  <input
                    type="radio"
                    id="LumpSum"
                    name="frequencyPayment"
                    value="Lump Sum"
                    checked={frequencyPayment === "Lump Sum"}
                    onChange={onFrequencyPaymentChange}
                  />{" "}
                  Lump Sum
                </label>
              </div>
            </Form.Group>
          </Col>
          <Col sm={4}>
            <Form.Group className="mb-3">
              <div>
                <input
                  type="radio"
                  id="Monthly"
                  name="frequencyPayment"
                  value="Monthly Pension"
                  checked={frequencyPayment === "Monthly Pension"}
                  onChange={onFrequencyPaymentChange}
                />{" "}
                Monthly
              </div>
            </Form.Group>
          </Col>
          <Col sm={4}>
          <div>
          <select  id="BENTYPEID" value={benefit} onChange={(e) => handleBenefitChange(e)}>
          <option value="">Benefit Type</option>
          {benefitList.map((benefit) => (

            <option value={benefit.BNTYPEDESC}  key={benefit.BENTYPEID} onChange={handleBenefitChange}>
  {benefit.BNTYPEDESC}
            </option>

          ))}
        </select>
          </div>
          
          </Col>
        </Row>

        <Form action={NextLevel}>
          <div style={{ float: "right" }}>
            <Button variant="primary" type="submit">
              Next
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Statement
