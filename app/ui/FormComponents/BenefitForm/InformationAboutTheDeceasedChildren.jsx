
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Moment from "moment";
import Image from "next/image";
export default function ScheduleTable ({values}) {
  const BaseUrl = process.env.BASE_URL
    const [error, setError] = useState(false);
     return (
    <>
     <nav
                    className="navbar"
                    style={{
                      backgroundColor: "#1f365c",
                      height: "25px",
                      padding: "0px",
                      // marginTop:"5px"

                    }}
                  >
                    <span className="navbar-text" style={{ color: "#fff", padding: "1px" }}>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Information about the deceased
                    </span>
                  </nav>

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
          <table style={{ width: '90%', marginLeft: "auto", marginRight: "auto",marginTop:"20px",fontSize:16,fontWeight:400 }} >
            <tbody>
              <tr>
                <th style={{ width: '10%' }}>NIN</th>
                <th style={{ width: '20%' }}>Legitimate Children Family name at birth</th>
                <th style={{ width: '20%' }}>Given Name</th>
                <th style={{ width: '10%' }}>Date of birth</th>
              </tr>
              <tr>
                <td>
                <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
               
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              <tr>
              <td>
                <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
               
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              <tr>
              <td>
                <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
               
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              <tr>
              <td>
                <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
               
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
            
           
            </tbody>
          </table>
        </Row>

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
          <table style={{ width: '90%', marginLeft: "auto", marginRight: "auto",marginBottom:"20px",fontSize:16,fontWeight:400 }} >
            <tbody>
              <tr>
                <th style={{ width: '10%' }}>NIN</th>
                <th style={{ width: '20%' }}>Recognised Children Family name at birth</th>
                <th style={{ width: '20%' }}>Given Name</th>
                <th style={{ width: '10%' }}>Date of birth</th>
              </tr>
              <tr>
              <td>
                <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
               
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              <tr>
              <td>
                <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
               
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              <tr>
              <td>
                <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
               
                  <textarea rows = "2" cols = "15" name = "description"></textarea>
                </td>
              </tr>
              <tr>
              <td>
                <textarea rows = "2" cols = "20" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
                </td>
                <td>
                <textarea rows = "2" cols = "50" name = "description"></textarea>
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

 
