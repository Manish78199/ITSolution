import React from 'react'
import './Assets/Style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mobile from "./Assets/img/AppDev3.jpg";
import eff from "./Assets/img/efficiency.png";
import high from "./Assets/img/high-speed.png"
import stab from "./Assets/img/stability.webp"
import apper from "./Assets/img/apperence.png";
import opt from "./Assets/img/optimize.png"


export default function Services() {
    return (
        <div>
            <h1 style={{
                fontWeight: 'bold',
                background: '#0b0e5c',
                padding: '20px',
                color: 'white'
            }}>Services</h1>
            <div className="Services_con">
                <div className="Services_nav_btn">
                    <button className='active_Services_btn'>Software Development</button>
                    <button>Web Development</button>
                    <button>It Consulting</button>
                </div>
                <div className="Services_desc">
                    <div className='Services_desc_row' style={{borderRight:"4px solid"}}>

                        <div className="Topics" >

                            <div className='Topic_desc'>
                                <div>
                                    <img src={opt} alt='Optimization' />
                                    <h5>optimization</h5>
                                </div>
                                <p>Highly Optimize Application. We want to deliver fast and efficient performance. As a result, speed has become one of the top metrics that people use to assess the quality of a  application's design
                                </p>
                            </div>
                            <div className="Topics_Num">1</div>
                        </div>

                        <div className="Topics">
                            
                            <div className='Topic_desc'>
                                <div>
                                    <img src={high} alt="High Speed" />
                                    <h5>Speed</h5>
                                </div>
                                <p> We want to deliver fast and efficient performance. As a result, speed has become one of the top metrics that people use to assess the quality of an  application's design
                                </p>
                            </div>
                            <div className="Topics_Num">2</div>
                        </div>


                        <div className="Topics">
                          

                            <div className='Topic_desc'>
                                <div>
                                    <img src={apper} alt="Attractive Appearance" />
                                    <h5>Apearance</h5>
                                </div>
                                <p>Best Appearance To Attract User Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi consequuntur omnis nulla? Id, facere aliquid.
                                </p>
                            </div>
                              <div className="Topics_Num">3</div>
                        </div>

                    </div>
                    <div className="Services_desc_row" >
                        <div className="Topics">
                            <div className="Topics_Num">4</div>
                            <div className='Topic_desc'>
                                <div>
                                    <img src={eff} alt="Efficiency" />
                                    <h5>Efficiency </h5>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, quaerat eaque alias architecto dolores nesciunt quis nulla! Expedita, voluptatibus quis!
                                </p>
                            </div>
                        </div>




                        <div className="Topics" >
                            <div className="Topics_Num">5</div>
                            <div className='Topic_desc'>
                                <div>
                                    <img src={stab} alt="Stablity" />
                                    <h5>Stability</h5>
                                </div>
                                <p>Stability for Long Use Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis alias deserunt explicabo, inventore nam placeat.
                                </p>
                            </div>
                        </div>


                        <div className="Topics">
                            <div className="Topics_Num">6</div>
                            <div className='Topic_desc'>
                                <div>
                                    <img src={stab} alt="Stablity" />
                                    <h5>Stability2</h5>
                                </div>
                                <p>Stability for Long Use Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis alias deserunt explicabo, inventore nam placeat.
                                </p>
                            </div>
                        </div>



                    </div>
                </div>

            </div>
        </div >

    )
}
