import Nav from "./Nav";
import React from 'react'
import MainPage from "./MainPage";
import ApplicationSection from "./ApplicationDev";
import Services from "./Services";

import WebDev from "./WebDev";
import Tecnology from "./Technology";
import Projects from "./ShowProject";
import Footer from "./Footer";
import Contact from "./Contact";
import Testimoly from "./Testimoly";

import "./Assets/Style.css"


export default function Home(props) {
    return (
        <div>
            <Nav Brand={props.Brand}/>
         
            <MainPage Brand={props.Brand}/>
            <ApplicationSection/> 
            <Services/>
            <Tecnology/>
            <Projects/>
            <Testimoly/>
            <Contact/>
            <Footer Brand={props.Brand}/>

         

        </div>
    )
}
