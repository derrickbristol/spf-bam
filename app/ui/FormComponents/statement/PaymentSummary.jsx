"use Client"


import React from 'react'

import { Form, Card, Button,Row,Col } from "react-bootstrap";



const PaymentSummary = (props) => {

    const grandTotal= (props.dataSummary?.VolInt+props.dataSummary?.ManInt+props.dataSummary?.MemVol+props.dataSummary?.EmpVol+props.dataSummary?.memComp+props.dataSummary?.empComp)?.toFixed(2)


    const ManCummTotal = (props.dataSummary?.ManInt+props.dataSummary?.memComp+props.dataSummary?.empComp)?.toFixed(2)
    const VolCumTotal =(props.dataSummary?.VolInt+props.dataSummary?.MemVol+props.dataSummary?.EmpVol)?.toFixed(2)
    const aggPer =(props.dataSummary?.AggregatePeriod)?.toFixed(2)
    const contPer =(props.dataSummary?.continuousPeriod)?.toFixed(2)

  return (
   <>
 <style>{`
    table,th,td{
     text-align:left
  
    }
  `}</style>

        <table style={{ width: "100%", marginBottom: "10px" }}>
          <tbody>
            <tr>
              <th></th>
              <th></th>
              <th>Last Alloc.Pd</th>
              <th>Cumm. Interest</th>
              <th>Refunds</th>
              <th>Cumm. Totals</th>
              <th>Conribution Years</th>
            </tr>
            <tr>
              <td>Employer Mandatory:</td>
              <td>SCR &nbsp;{props.dataSummary?.empComp}</td>
              <td>{props.dataSummary?.lastEmpManPd}</td>
              {/* <td>{props.dataSummary[0]?.empComp}</td> */}
              {/* <td>{props.dataSummary[0]?.lastEmpManPd}</td>
         <td>{props.dataSummary[0]?.lastEmpManPd}</td> */}
              <td></td>
              <td></td>
              <td></td>
              <td>Continuous &nbsp;{contPer}</td>
            </tr>
            <tr>
              <td>Employee Mandatory:</td>
              <td>SCR &nbsp;{props.dataSummary?.memComp}</td>
              <td>{props.dataSummary?.lastMemManPd}</td>
              <td>SCR &nbsp;{props.dataSummary?.ManInt}</td>
              <td></td>
              <td>SCR &nbsp;{ManCummTotal}</td>
              <td>Aggregate Period &nbsp;{aggPer}</td>
            </tr>

            <tr>
              <td>Employer Voluntary:</td>
              <td>SCR &nbsp;{props.dataSummary?.EmpVol}</td>
              <td>{props.dataSummary?.lastEmpVolPd}</td>
              {/* <td>{props.dataSummary[0]?.VolInt}</td> */}
              {/* <td>{props.dataSummary[0]?.lastEmpVolPd}</td>
         <td>{props.dataSummary[0]?.lastEmpVolPd}</td> */}
            </tr>

            <tr>
              <td>Employeee Voluntary:</td>
              <td>SCR &nbsp;{props.dataSummary?.MemVol}</td>
              <td>{props.dataSummary?.lastMemVolPd}</td>
              <td>SCR &nbsp;{props.dataSummary?.VolInt}</td>
              <td></td>
              <td>SCR &nbsp;{VolCumTotal}</td>
            </tr>
          </tbody>
        </table>

        <Row>
          <Col md={4}></Col>
          <Col md={8}>
            <p>
              <label>Grand Total for Member SCR {grandTotal} </label>
            </p>
          </Col>
        </Row>

   </>
  )
}

export default PaymentSummary