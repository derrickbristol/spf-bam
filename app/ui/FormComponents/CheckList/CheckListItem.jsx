
import { Form, Col, Row } from "react-bootstrap";
import Moment from "moment";
import React, { useState ,useEffect} from "react";
import {fetchCheckList} from '../../../lib/data'

import {useFormState} from 'react-dom'
import {getSession} from "../../../../lib";



export default  function CheckListItem ({values,checkList}) {

    const [error, setError] = useState(false);

     return (
    <>

        {checkList?.map(({ CheckListId, DocumentName, DocumentDescription, }, index) => {
      
          return (
            <div style={{ marginBottom: 10 }} key = {CheckListId} >
              <Row>
              <Col sm={1}>
                 <input
                  type="checkbox"
                  name={DocumentName}
                  value={DocumentName}
                />
                </Col>
                <Col sm={6} style={{ width: '80%', marginLeft: "auto",marginRight: "auto"}}>
                  <label>{DocumentName}</label>
                  <label>{DocumentDescription}</label>
                </Col>
              </Row>
            </div>
          );
        })}

        <Row>
          <Col sm={12} style={{ width: '80%', marginLeft: "auto",marginRight: "auto", marginTop:10}}>
            <Form.Group className="mb-3">
              <Form.Label >Additional Comments </Form.Label>

              <Form.Control as="textarea" rows={6}
                style={{ border: error ? "2px solid red" : "" }}
                type="text"
                name="MEMADDR"
                
                // defaultValue={values.MEMADDR}
                // onChange={handleFormData("MEMADDR")}
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
          <Col sm={12} style={{ width: '80%', marginLeft: "auto", fontWeight:500,marginRight: "auto"}}>
            <p >
              <label ><br></br> Completed by: {window.$loginname} on   {Moment().format("DD-MMMM-YYYY")}
         </label></p>
          </Col>
        </Row>

    </>
  )
}