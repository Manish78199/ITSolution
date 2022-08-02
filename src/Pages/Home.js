import Nav from "./Nav";
import React from 'react'
import MainPage from "./MainPage";
import ApplicationSection from "./ApplicationDev";
import WebDev from "./WebDev";
import Tecnology from "./Technology";
import Projects from "./ShowProject";
import Footer from "./Footer";
import Contact from "./Contact";

import "./Assets/Style.css"


export default function Home(props) {
    return (
        <div>
            <Nav Brand={props.Brand}/>
         
            <MainPage Brand={props.Brand}/>
            <ApplicationSection/>
            <Tecnology/>
            <Projects/>
            <Contact/>
            <Footer Brand={props.Brand}/>

         

        </div>
    )
}
