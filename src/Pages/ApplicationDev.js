import React from 'react';
import './Assets/Style.css';
import Figure from 'react-bootstrap/Figure'
import softwaredev from "./Assets/img/SoftwareDev.jpg"
import mobile from "./Assets/img/iphone12-white.svg";
import mobileUi from "./Assets/img/mobileUi.png"

export default function ApplicationContainer(){

  const h1Style={
    color: '#ffffff',
background: '#131470',
padding: '20px',
fontWeight: 'bold'
  }

return(
 <>

<h1 style={h1Style}>Software Devlopment Services</h1>


   <div style={{

backgroundRepeat: 'no-repeat',
width: '100%',
backgroundSize: 'contain',
height: '664px',
backgroundImage:"url("+softwaredev+")"}} >
    <div style={{

backgroundRepeat: 'no-repeat',
width: '100%',
backgroundSize: 'contain',
height: '664px',
backgroundImage:"url("+mobileUi+")"}} ></div>

</div>
 </>
);
};

