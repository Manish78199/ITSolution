import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import main_Back from "./Assets/Work_7.jpg"





export default function MainPage() {


  const conStyle = {
    backgroundSize: "contain",
    // backgroundColor: "#03030b",
    height: "660px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center left ",
    backgroundImage: "url("+main_Back  +")"
  };

 const H1Style={
  
 color: '#3435ce',
float: 'right',
fontWeight: 'bold',
marginTop: '15%',
marginRight: '16%'
 };


  return (
    <Container fluid style={conStyle}>
<div  style={{float: 'right',
marginTop: '10%',
marginRight: '5%',
rowGap: '20px',
color: 'rgb(52, 53, 206)',
display: 'flex',
width: 'auto',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center'}}><h1 style={{fontWeight: 'bold'}}> Software Development And<br/>
Cunsulting services</h1>
<p style={{width:"300px"}}><span className='brandlogo'>it Solution . Com</span> Help to Grow Your Bussines With Cunsulting ,Web development And Software Development Services</p>
<div> <button className='loginbtn'  >Primary</button>{' '}{' '}
  <button className='loginbtn' >Secondary</button></div>

          </div>
     
    </Container>
  )
}
