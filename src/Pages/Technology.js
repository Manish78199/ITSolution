import React from 'react';
import './Assets/Style.css';
import Image from 'react-bootstrap/Image'

import Figure from  'react-bootstrap/Figure';

import reactimage from "./Assets/img/React.png";
import vueimage from "./Assets/img/Vue.png";
import angularimage from "./Assets/img/Angular.png";
import nodeimage from "./Assets/img/node.png";
import mysqlimage from "./Assets/img/mysql.png"
import expressimage from "./Assets/img/express.png";
import djangoimage from "./Assets/img/Django.png";
import mongoimage from "./Assets/img/MongoDB.png"




export default function Technology() {

    return (
      <div >
         <h1 style={{padding: '20px 0px',
color: 'rgb(52 53 206)',
fontWeight: 'bold'}}>Technologies To Make Great Product</h1>
        <div className='TecnoCon'>
            <div className="TechnologyPlates" title='React'>
               <Figure.Image src={reactimage} alt="React" width="120" height="120"/>
               {/* <span>React Js</span> */}
            </div>
            <div className="TechnologyPlates" title='Django'>
               <Figure.Image src={djangoimage} width="120" height="120" alt="Django"/>
               {/* <span> Django</span> */}
            </div>
            <div className="TechnologyPlates" title='Vue Js"'>
               <Figure.Image src={vueimage} width="120" height="120" alt="Vue Js"/>
               {/* <span>Vue Js</span> */}
            </div>
            <div className="TechnologyPlates" title='Angular Js'>
               <Figure.Image src={angularimage} width="120" height="120" alt="Angular Js"/>
               {/* <span>Angular Js</span> */}
            </div>
            <div className="TechnologyPlates" title='Node Js'>
               <Figure.Image src={nodeimage} width="120" height="120" alt="Node Js"/>
               {/* <span>Node Js</span> */}
            </div> 
            <div className="TechnologyPlates" title='Mysql'>
               <Figure.Image src={mysqlimage} width="120" height="120" alt="Mysql"/>
               {/* <span>MySql</span> */}
            </div>
            <div className="TechnologyPlates" title='Express Js'>
               <Figure.Image src={expressimage} width="120" height="120" alt="Express Js"/>
               {/* <span>Express Js</span> */}
            </div>
            <div className="TechnologyPlates" title='MongoDB'>
               <Figure.Image src={mongoimage} width="120" height="120" alt="MongoDB"/>
               {/* <span>MongoDB</span> */}
            </div>
        </div>
        </div>
    )
}
