import React from 'react'
import Figure from 'react-bootstrap/Figure'
import { useState } from 'react'
import "./Assets/Style.css"
import happycustomer from "./Assets/img/HappyCustomer2.webp";



export default function ShowProject() {

const st={ 

flexDirection: 'column',
display: 'flex',
alignItems: 'center',
paddingBottom:"30px"
};

  const [TotalProject, setTProject] = useState(2789);
  return (
    <div style={st}>
      <h1 style={{width: '100%',
color: '#3435ce',
padding: '20px 0px',
fontWeight: 'bold',
backgroundColor: '#cbcbcb'}}>Our Projects</h1>
      <div className='ProjectContainer' >
        <div className="ProjectDiv" >
          <span>{TotalProject}</span>
          <span>Total Project</span>
        </div>
        <div className="ProjectDiv" >
          <span>{TotalProject - 19}</span>
          <span>Completed Project</span>
        </div>
        <div className="ProjectDiv">
          <span>{19}</span>
          <span>Uncompleted Project</span>

        </div>
      </div>

      <div className="HappyCientCon">
        
        <div>
          <span style={{
           
            color:"#252591"
          
          }}>{2614}</span>
          <span style={{ color:"#252591"}}>Happy Customer</span>
        </div>
         
             <Figure>
               <Figure.Image  
               width={200}
               height={380}
               alt="Happy Customer"
               src={happycustomer} />

             </Figure>
      </div>
    </div>
  )
}
