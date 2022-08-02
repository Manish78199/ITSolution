import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { Figure } from 'react-bootstrap'
import Auther from "./Assets/img/Manish.png"



export default function About(props) {

  const AutherStyle = {
    marginTop: "50px",
    marginLeft: "50px",
    width: '200px',
    borderRadius: '50%',
    backgroundSize: 'contain',
    height: '200px',
    backgroundImage: "url(" + Auther + ")"
  };

  return (
    <>
      <Nav Brand={props.Brand} />
      <div>
        <div style={AutherStyle}>
        </div>
        <p><span className='brandlogo'>{props.Brand}</span> Help to Grow Your Bussines With Consulting ,Web development And Software Development Services</p>
      </div>
      <Footer Brand={props.Brand} />

    </>

  )
}
