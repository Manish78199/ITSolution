import React from 'react'
import { useState } from 'react'
import "./Assets/Style.css"

import  tp1 from "./Assets/img/Testimonials/p1.jpg"
import  tp2 from "./Assets/img/Testimonials/p2.jpg"
import  tp3 from "./Assets/img/Testimonials/p3.jpg"
export default function Testimoly() {

   const[active,setactive]=useState(1);

   const btn=[1,2,3];
   const Testi=[
    {id:1,
     text:"It is best to grow your bussines , because it is provide best services in It and cunsulting services",
     name:"Manish",
     img:tp1
    },
    {id:2,
    text:"It is best to grow your bussines , because it is provide best services in It and cunsulting services",
     name:"gautam",
     img:tp2},
    {id:3,
    text:"It is best to grow your bussines , because it is provide best services in It and cunsulting services",
     name:"Vikshit",
     img:tp3}
   ];



    return (
        <div>
            <h1 style={{ width: "100%", backgroundColor: "#ffff56", padding: "20px", fontWeight: "bold" }}>Testimonials</h1>
          
            <div style={{
                backgroundColor: '#ceffe8',
                width: '100%',
                display: 'flex',
                height: '560px',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems:"center"
            }}>
                <div style={{width:"100%",height:"100%"}}>
                <div  className="Testimoly_body-con">
                    {
                    Testi.map(({id,name,img,text})=>(
                        <div key={id} style={{transform:id===active?"translateX(0)":id<=active?"translateX(-850px)":"translateX(850px)"}}>


                        <div className='Testitmoly_body'><p>{text}</p><p>{name}</p></div>
                        <div className='Testitmoly_img_con'><img src={img} alt="" /></div>
                    </div>
                    ))
                    
                        }
                </div>

                <div className="TestiNavBtnCon" >
                    
                    {
                        btn.map((btnid)=>(
                        <button key={btnid} onClick={()=>setactive(btnid)}></button>
                        ))
                            
                        
                    }
                </div>
                </div>
            </div>

        </div>

    )
}
