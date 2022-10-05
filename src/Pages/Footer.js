import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table';
import Figure from 'react-bootstrap/Figure';
import { IconContext } from "react-icons";
import { FiFacebook } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import "./Assets/Style.css"
export default function Footer() {

  // const FoSt={
  //   backgroundColor:"darkBlue"
  // };

  return (
    <div id="MainFoot">
      <div style={{
        backgroundColor: "#1a2e35",
        display: "flex",
        flexDirection: "row",

        color: "white"
      }}
        id="footCon">
        <div className='FollowUs' >
          <div>
            <p style={{ textAlign:"left",fontFamily: "Sacramento", fontSize: "18px" }}>it Solution . Com</p>
            <p style={{ textAlign: "left",fontWeight:"bold" }}> Help to Grow Your Bussines With Consulting ,Web development And Software Development Services</p>

          </div>

          <div style={{ display: "flex", flexDirection: "row", columnGap: "10px" }} className="SocialLinkCon">
            <IconContext.Provider value={{ size: "20px", className: "Social_Link" }} >
              <a href="#" title='Facebook'><FiFacebook /></a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "20px", className: "Social_Link" }}>
              <a href="#" title='Instagram'> <FiInstagram /></a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "20px", className: "Social_Link" }}>
              <a href="#" title='Linkedin'> <FiLinkedin /></a>
            </IconContext.Provider>
            <IconContext.Provider value={{ size: "20px", className: "Social_Link" }}>
              <a href="#" title='Twitter'> <FiTwitter /></a>
            </IconContext.Provider>
          </div>


        </div>

        <div className='FontLinkContainer' style={{display:"flex",columnGap:'20px'}}>
          <div style={{ textAlign: "left" }}>
            <span >Quik Link</span>
            <br />
            <ul>
              <li> <Link to="/About">About Us</Link></li>
              <li> <a href="http://">web development</a></li>
              <li> <a href="http://">development</a></li>
            </ul>
          </div>
          <div style={{ textAlign: "left" }}>
            <span>Our services</span>
            <br />
            <ul>
              <li> <a href="http://">home</a></li>
              <li> <a href="http://">web development</a></li>
              <li> <a href="http://">development</a></li>
            </ul>
          </div>

          <div style={{ textAlign: "left" }}>
            <span>Contact Us</span>
            <br />
            <ul>
              <li> <a href="http://">Call us</a></li>
              <li> <a href="http://">Mail us</a></li>
            </ul>
          </div>


        </div>


      </div>
      <div className="reserve" >
        &copy; <span style={{ fontSize: "18px" }} className="brandlogo">it Solution . Com </span>. 2022 All Right Reserve
      </div>

    </div>
  )
}
