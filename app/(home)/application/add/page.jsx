"use client"
import React ,{  useState} from "react"

import dynamic from 'next/dynamic'
// import Header from "../components/header"

const APIMP = dynamic(()=>import( "../../../UI/Forms/APIMP"))
const APILS = dynamic(()=>import("../../../UI/Forms/APILS")) 
const NR = dynamic(()=>import("../../../UI/Forms/NR"))
const NRLS= dynamic(()=>import("../../../UI/Forms/NRLS"))  

const SSP= dynamic(()=>import("../../../UI/Forms/SurvivingSpouse"))
const RVC = dynamic(()=>import("../../../UI/Forms/RefundOfVoluntaryContribution"))
const APRDG= dynamic(()=>import("../../../UI/Forms/APRDG"))
const PSSP= dynamic(()=>import("../../../UI/Forms/PostSurvivingPension")) 
const RetirementLetter= dynamic(()=>import("../../../UI/Forms/RetirementLetter"))
const ClientReceipt = dynamic(()=>import("../../../UI/Forms/ClientReceipt"))





import Statement from '../../../UI/Forms/Statement'
import CheckList  from '../../../UI/Forms/CheckList'



import { Container, Row, Col } from "react-bootstrap";

const NewApplication = (data)=> {
  console.log("in it")
console.log(data)
  const [step, setstep] = useState(1);
  const [dataSummary, setDataSummary] = useState([]);
 const [gridData, setGridData] = useState([]);
 const [appId,setAppId]=useState("0")
 const [isDisabled, setIsDisabled] = useState(false);
 const [open, setOpen] = React.useState(false);
 const handleClose = () => {
  setOpen(false);
};
  const nextStep = () => {
    setstep(step + 1);
  };
  const BaseUrl = process.env.BASE_URL


 

 
  const [formData, setFormData] = useState({
    BenefitLabel:"",
    benefitType:"",
    MEMNIN: "",
    SURNAME: "",
    ONAMES: "",
    BIRTHDATE: "",
    GENDER:"",
    MEMADDR:"",
    EMAILADDR:"",
    CONTACTTEL:"",
    DOD:"",
    NAMEOFSPOUSE:"",
    NINSPOUSE:"",
    SURNAMESPOUSE:"",
    ONAMESSPOUSE:"",
    MAIDENNAMESPOUSE:"",
    GENDERSPOUSE:"",
    BIRTHDATESPOUSE:"",
    ADDSPOUSE:"",
    CURADDR:"",
    userId:"",
  })

  const handleInputData = input => e => {
    // input value from the form
    const {value } = e.target;

    //updating for data state taking previous state and then adding new value to create new object
    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  }

  // function for going to previous step by decreasing step state by 1
  const prevStep = () => {
    setstep(step - 1);
  };

  const handleSubmit = () => {
     formData.userId=data.searchParams.username;
    //  console.log(formData)
     const confirm = window.confirm(
    "Are you sure you want to add this Application?" 
  );
  confirm &&
    fetch(BaseUrl+"addApplication", 
    {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp)
        setAppId(resp)
        setIsDisabled(true)
        handleClose();
      });
     

};

const handleSubmitVR = () => {
//  formData.userid=(window.$loginname).substr(0, 10);
// console.log(formData)
 const confirm = window.confirm(
"Are you sure you want to add this Application?" 
);
confirm &&
fetch(BaseUrl+"addVRApplication", 
{
  method: "POST",
  body: JSON.stringify(formData),
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
})

  .then((resp) => resp.json())
  .then((resp) => {
    // console.log(resp)
    setAppId(resp)
    setIsDisabled(true)
    handleClose();
  });
 

};

 
// javascript switch case to show different form in each step
switch (step) {
   
  // case 1 to show stepOne form and passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
  case 1:
    return (
     
      <div className="App">
        <Container>
          <Row>
            {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
         <Col>
              <Statement nextStep={nextStep} gridData = {gridData}  setGridData={setGridData} handleFormData={handleInputData} values={formData} dataSummary={dataSummary} setDataSummary={setDataSummary} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
  case 2:
     
  return (
    
    <div className="App"> 
  
      <Container>
        <Row>

          {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
         <Col>
            <CheckList benefittype={formData.benefitType} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData}  setGridData={setGridData} gridData={gridData} values={formData} />
          </Col>
        </Row>
      </Container>
    </div>
  );

    case 3:
      
     switch(formData.benefitType.toString()){
      case "3":
        switch(formData.frequency.toString()){
          case"Monthly Pension":
          return ( 
      
            <div className="App">
    
              <Container>    
              <Row>
               
                  <Col>
                    <APIMP  appId={appId} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} handleSubmit={handleSubmit} values={formData} />                
                  </Col>
                </Row>
              </Container>
            </div>);
            case "Lump Sum":
              return ( 
      
                <div className="App">
        
                  <Container>    
                  <Row>
                   
                      <Col>
                        <APILS appId={appId} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} handleSubmit={handleSubmit} values={formData} />                
                      </Col>
                    </Row>
                  </Container>
                </div>);

          default:
            return (
              <div className="App">
              </div>
            );

        }





      
       case "1":

       switch(formData.frequency.toString()){
        case"Monthly Pension":
        return ( 
    
          <div className="App">
  
  <Container>
           <Row>
             {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
             <Col>
               <NR  appId={appId} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} handleSubmit={handleSubmit} values={formData} />
             </Col>
           </Row>
         </Container>
          </div>);
          case "Lump Sum":
            return ( 
    
              <div className="App">
      
      <Container>
           <Row>
             {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
             <Col>
               <NRLS  appId={appId} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} handleSubmit={handleSubmit} values={formData} />
             </Col>
           </Row>
         </Container>
              </div>);

        default:
          return (
            <div className="App">
            </div>
          );

      }


       case "6":
        return (
        <div className="App">
          <Container>
            <Row>
              {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
              <Col>
                <SSP nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} handleSubmitVR={handleSubmitVR} />
              </Col>
            </Row>
          </Container>
        </div>);

case "17":
return (
<div className="App">
  <Container>
    <Row>
      {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
      <Col>
      
        <RVC appId={appId} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} handleSubmitVR={handleSubmitVR} values={formData} />
      </Col>
    </Row>
  </Container>
</div>);


case "5":
return (
<div className="App">
  <Container>
    <Row>
      {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
      <Col>
      
        <APRDG nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      </Col>
      
    </Row>
  </Container>
</div>);

case "Voluntary Contributions":
return (
<div className="App">
  <Container>
    <Row>
      {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
      <Col>
      
        <RVC nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      </Col>
    </Row>
  </Container>
</div>);

case "9":
return (
<div className="App">
  <Container>
    <Row>
      {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
      <Col>
      
        <PSSP nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
      </Col>
    </Row>
  </Container>
</div>);



      default:
        return (
          <div className="App">
          </div>
        );
    }
  


    // Only formData is passed as prop to show the final value at form submit
  case 4:
    return (
      <div className="App">
        <Container>
          <Row>
            {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
            <Col>
            <RetirementLetter nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} data={formData}  />
             
            </Col>
          </Row>
        </Container>
      </div>
    );
    case 5:
    return (
      <div className="App">
        <Container>
          <Row>
            {/* <Col  md={{ span: 6, offset: 3 }} className="custom-margin"> */}
            <Col>
              
              <ClientReceipt appId={appId} nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  // default case to show nothing
  default:
    return (
      <div className="App">
        
      </div>
    );
}
}

export default NewApplication
