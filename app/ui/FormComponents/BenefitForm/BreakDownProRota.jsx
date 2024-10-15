
import React, { useState } from "react";
import { Form, Card, Col, Row, Container, Button } from "react-bootstrap";
import Moment from "moment";
export default function BreakDownProRota ({handleFormData,values}) {

    const [error, setError] = useState(false);
     return (
    
    <>
<Row >

                   
<div>
  <nav
    className="navbar mb-3"
    style={{
      backgroundColor: " #f06628ff",

      height: "25px",
      padding: "0px",
    }}
  >
    <span className="navbar-text" style={{ color: "#fff", padding: "0px" }}>
      BREAKDOWN OF PENSION
    </span>
  </nav>

  <style>{`
            table,th,td{
            border:1px solid black;
            text-align:left
            
            }
          `}</style>
  <table style={{ width: '100%', marginBottom: "10px" }} >
    <tbody>
      <tr>
        <th style={{ width: '40%' }}></th>
        <th style={{ width: '60%' }}></th>

      </tr>
      <tr>
        <td>Amount of monthly Pension:</td>
        <td> <textarea rows = "1" cols = "50" name = "description"></textarea></td>
      </tr>
      <tr>
        <td>Amount of pension annuity from voluntary contribution:</td>
        <td> <textarea rows = "1" cols = "50" name = "description"></textarea></td>
      </tr>

      <tr>
        <td>Total Pension amount:</td>
        <td> <textarea rows = "1" cols = "50" name = "description"></textarea></td>
      </tr>

      <tr>
        <td>Effective Date of Pension:</td>
        <td> <textarea rows = "1" cols = "50" name = "description"></textarea></td>
      </tr>
    </tbody>
  </table>
</div>
<div>
  <Row className="pagebreak" style={{marginTop:50}}>
  <nav
    className="navbar mb-3"
    style={{
      backgroundColor: " #f06628ff",

      height: "25px",
      padding: "0px",
    }}
  >
    <span className="navbar-text" style={{ color: "#fff", padding: "0px" }}>
      Calculation of Pro rata
    </span>
  </nav>

  
    <Col sm={12}>
      <Form.Group className="mb-3">
        <Form.Control as="textarea" rows={8}
          style={{ border: error ? "2px solid red" : "" }}
          type="text"

          // onChange={handleFormData("MEMNIN")}
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
</div>

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
    </>
  )
}

 
