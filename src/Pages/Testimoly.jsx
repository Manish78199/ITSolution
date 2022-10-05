import React from 'react'
import { useState } from 'react'
// import "./Assets/Style.css"
import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import {FcNext, FcPrevious} from "react-icons/fc"
import tp1 from "./Assets/img/Testimonials/p1.jpg"
import tp2 from "./Assets/img/Testimonials/p2.jpg"
import tp3 from "./Assets/img/Testimonials/p3.jpg"
import tb from "./Assets/img/Testimonials/b3.jpg"
import { icons } from 'react-icons'
export default function Testimoly() {

    const [active, setactive] = useState(1);

    const btn = [1, 2, 3];
    const Testi = [
        {
            id: 1,
            tag:"All Services are Here",
            text: "These give the Best Service to grow your business because They have experts, experienced, and  talented employees",
            name: ["Nathan", "CEO at Dibly"],
            img: tp1
        },
        {
            id: 2,
            tag:"Very Responsible",
            text: "These are very responsible for helping us to get our targets because it is providing best services in It and consulting services",
            name: ["Erik", "Manager"],
            img: tp2
        },
        {
            id: 3,
            tag:"It is best for grow Your Bussiness",
            text: "It is best to grow your business because it provides the best services in It and consulting services",
            name: ["Illy", "Team Leader"],
            img: tp3
        }
    ];



    return (
        <div>
            <h1 style={{
                width: '100%',
                backgroundColor: 'rgb(24 63 164)',
                padding: '20px',
                color: 'white',
                fontWeight: 'bold'
            }}>Testimonials</h1>

            <div style={{

                backgroundImage: "url(" + tb + ")",
                backgroundSize:"cover",
                backgroundRepeat:"no-repeat",
                backgroundPosition:"center",
                width: '100%',
                display: 'flex',
                height: '560px',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    width: '100%',
                    height: '400px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    columnGap: "30px"
                }}>

                    <div id="left" onClick={() =>setactive(active===1?3:active-1)}><IconContext.Provider value={{ size: "40px", className: "TestNavbtn" }} >
                                            <FcPrevious /></IconContext.Provider></div>
                    <div className="Testi_con"style={{width:"700px",height:"300px"}} >

                    <div className="Testimoly_body-con">
                        {
                            Testi.map(({ id,tag, name, img, text }) => (
                                <div key={id} style={{ transform: id === active ? "translateX(0)" : id <= active ? "translateX(-850px)" : "translateX(850px)" }}>
                                    <div className='Testitmoly_body'>
                                        <h3 style={{ fontFamily:"questrial" }}>{tag}</h3>
                                        <div id="reveiw_con"> <IconContext.Provider value={{ size: "20px", className: "Reveiw" }} >
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                        </IconContext.Provider></div>
                                        <p>{text}</p>
                                        <div className="name-con">
                                            <b style={{fontFamily:"questrial"}}>{name[0]}</b>
                                            <p>{name[1]}</p>
                                        </div>

                                    </div>

                                    <div className='Testitmoly_img_con'><img src={img} alt="" /></div>

                                </div>
                            ))

                        }
                    </div>
                    </div>
                    <div id="right" onClick={() =>setactive(active===3?1:active+1)}> <IconContext.Provider value={{ size: "40px", className: "TestNavbtn"}} >
                                            <FcNext/></IconContext.Provider></div>

                    {/* <div className="TestiNavBtnCon" >

                        {
                            btn.map((btnid) => (
                                <button key={btnid} onClick={() => setactive(btnid)}></button>
                            ))


                        }
                    </div>  */}
                </div>
            </div>

        </div>

    )
}
