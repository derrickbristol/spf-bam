
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Moment from "moment";
import Image from "next/image";
export default function ScheduleTable ({values}) {
  const BaseUrl = process.env.BASE_URL
    const [error, setError] = useState(false);
     return (
    <>


          <Row >
          <style>{`
                  table,th,td{
                  border:1px solid black;
                  text-align:left
                  
                  }
                  input {
                    font-size: 16px;
                    background-color: transparent;
                    border: none;
                    width: 100%;
                    padding: 12px 12px;
                    inline-size: 150px; 
                    overflow: hidden;
                  }
                `}</style>
          <table style={{ width: '90%', marginLeft: "auto", marginRight: "auto",fontSize:16,fontWeight:400 }} >
            <tbody>
              <tr>
                <th style={{ width: '30%' }}>Period</th>
                <th style={{ width: '55%' }}>Stage</th>
                <th style={{ width: '10%' }}>Signature</th>
                <th style={{ width: '5%' }}>Actual Days Taken</th>
              </tr>
              <tr>
                <td>1st day</td>
                <td>Registration of the application by Customer Service Assistant (Front Office)</td>
                <td>
                <img  src={BaseUrl+"images/" + window.$loginname +".png" || "/noavatar.png"}  width={100} height={50}/>
                </td>
                <td>
                {/* {Moment().format("DD-MMM-YYYY")} */}
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              <tr>
                <td>2nd day</td>
                <td>Verification of the application by First line Verification in Front Office and refer to Benefit Section</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>

              <tr>
                <td>3rd day</td>
                <td>Verification of the application received from the Front Office by the Middle Office</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              
              <tr>
                <td>4th to 8th day</td>
                <td>Processing of the application by Benefit Assistant (Back Office)</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>

              <tr>
                <td>9th to 10th day</td>
                <td>First line of verification</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>

              <tr>
                <td>11th and 12th day</td>
                <td>Second line of verification</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              <tr>
                <td>13th to 14th day</td>
                <td>Verification by Quality Assurance</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>

              <tr>
                <td>15th day</td>
                <td>Approval by CEO</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>

              <tr>
                <td>16th to 18th day</td>
                <td>Effecting payment</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>

              <tr>
                <td>19th day</td>
                <td>Writing letters of entitlement</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>

              <tr>
                <td>20th day</td>
                <td>Posting of entitlement letter</td>
                <td>
                  <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </Row>
    </>
  )
}

 
