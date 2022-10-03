import React from 'react';
import './Assets/Style.css';
import Figure from 'react-bootstrap/Figure'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mobile from "./Assets/img/AppDev3.jpg";
import eff from "./Assets/img/efficiency.png";
import high from "./Assets/img/high-speed.png"
import stab from "./Assets/img/stability.webp"
import apper from "./Assets/img/apperence.png";
import opt from "./Assets/img/optimize.png"


export default function ApplicationContainer(){

  const h1Style={
   color: 'rgb(0 1 32)',
background: 'rgb(240 239 253)',
padding: '20px',
fontWeight: 'bold'
  }

return(
 <>

 {/* <li>Highly Optimize Application</li>
              <li>High Speed</li> 
              <li>Best Appreance To Attract User</li>
              <li>Efficiency </li>
              <li>Stability for Long Use</li>
 */}
   <div className='ApplicationContainer'>
       <h1 style={h1Style}>Software Devlopment Services</h1>
       <div style={{
    height: "maxContent",
    overflow: "hidden"
}}>
        

        
      <Row  style={{height:"200px"}}>

        <div className="Topics" style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                       <img src={opt} alt='Optimization'/>
                       <h5>optimization</h5>
             <h6 style={{width:"400px"}}>Highly Optimize Application. We want to deliver fast and efficient performance. As a result, speed has become one of the top metrics that people use to assess the quality of a  application's design</h6>
          </div>
      </Row>
      <Row  >
        <Col >
              <div className="Topics">
               <img src={high} alt="High Speed"/>
               <h5>Speed</h5>
              <h6 style={{textAlign:"center"}}> We want to deliver fast and efficient performance. As a result, speed has become one of the top metrics that people use to assess the quality of an  application's design</h6>
                </div>
              <div className="Topics">
                <img src={apper} alt="Attractive Appearance"/>
                <h5>Apearance</h5>
                <h6 style={{textAlign:"center"}}>Best Appearance To Attract User Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi consequuntur omnis nulla? Id, facere aliquid.</h6></div>
        </Col>
        <Col sm={6} ><img src={mobile}  style={{height:"100%",width:"100%"}} alt="Software Development"/></Col>
        <Col style={{}}>

              <div className="Topics">
                <img src={eff} alt="Efficiency"/>
                <h5>Efficiency </h5>
                <h6 style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quaerat eaque alias architecto dolores nesciunt quis nulla! Expedita, voluptatibus quis!</h6>
                </div>
              <div className="Topics" style={{}}>
                <img src={stab} alt="Stablity"/>
                <h5>Stability</h5>
                <h6 style={{textAlign:"center"}}>Stability for Long Use Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis alias deserunt explicabo, inventore nam placeat.</h6>
                </div>
       
        </Col>
      </Row>
    
      
          
       </div>
   </div>
 </>
);
};

