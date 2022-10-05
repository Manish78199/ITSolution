import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import main_Back from "./Assets/Work_11.png"





export default function MainPage() {



  const H1Style = {

    color: '#3435ce',
    float: 'right',
    fontWeight: 'bold',
    marginTop: '',
    marginRight: '16%'
  };


  return (
    <Container fluid className="MainContainer" style={{ display: "flex", height: "660px", }}>

      <div className='MainDevImage' style={{ backgroundImage: "url(" + main_Back + ")" }}>

      </div>






      <div style={{
        float: 'right',
        fontWeight: 'bold',
        marginTop: '10%',
        rowGap: '20px',
        color: 'rgb(52 51 58)',
        display: 'flex',
        width: 'auto',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start'
      }}>

        <h1 style={{ fontWeight: 'bold' }}> Software Development And<br />
          Cunsulting services</h1>
        <p style={{ width: "300px" }}><span className='brandlogo'>it Solution . Com</span> Help to Grow Your Bussines With Consulting ,Web development And Software Development Services</p>
        {/* <div> <button className='loginbtn'  >Primary</button>{' '}{' '}
  <button className='loginbtn' >Secondary</button>
  </div> */}

      </div>


    </Container >
  )
}
