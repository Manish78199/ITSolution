import React from 'react';
import './Assets/Style.css';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';

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
      <h1 style={{
        padding: '20px 0px',
        color: 'rgb(0 0 0)',
        fontWeight: 'bold',
        backgroundColor: '#e7eaf7'
      }}>Technologies To Make Great Product</h1>

      <div className='TecnoCon'>
        <div className="TechRow">

          <div className="TechRow-Res">

          <Card  style={{borderColor:'#499d4a'}}>
            <Card.Header style={{backgroundColor: '#499d4a'}}>Mongo DB</Card.Header>
            <Card.Img src={mongoimage} />
            <Card.Body>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary"><a href="https://www.mongodb.com">About</a></Button> */}
            </Card.Body>
          </Card>

          <Card  style={{borderColor:'#323232'}}>
            <Card.Header style={{backgroundColor: '#323232'}}>Express Js</Card.Header>
            <Card.Img src={expressimage} />
            <Card.Body>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

        </div>
        <div className="TechRow-Res">

          <Card style={{borderColor:'#00ccff'}}>
            <Card.Header style={{backgroundColor: '#00ccff'}}>React Js</Card.Header>
            <Card.Img src={reactimage} />
            <Card.Body>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          <Card style={{borderColor:'#65a163'}}>
            <Card.Header style={{backgroundColor: '#65a163'}}>Node Js</Card.Header>
            <Card.Img src={nodeimage} />
            <Card.Body>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
 
        </div>




        <div className="TechRow">
          <div className="TechRow-Res">
          <Card style={{borderColor:'#00608c'}}>
            <Card.Header style={{backgroundColor: '#00608c'}}>Mysql</Card.Header>
            <Card.Img src={mysqlimage} />
            <Card.Body>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>


          <Card style={{borderColor:'#3ab982'}}>
            <Card.Header style={{backgroundColor: '#3ab982'}}>Vue Js</Card.Header>
            <Card.Img src={vueimage} />
            <Card.Body>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
          </div>

           <div className="TechRow-Res">
     
             <Card style={{borderColor: '#c3002e'}}>
            <Card.Header style={{backgroundColor: '#c3002e'}}>Angular Js</Card.Header>
            <Card.Img src={angularimage} />
            <Card.Body>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>


         
             <Card style={{borderColor:'black'}}>
            <Card.Header style={{backgroundColor: 'black'}}>Django</Card.Header>
            <Card.Img src={djangoimage} />
            <Card.Body>

              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>

          </div>
        </div>
      </div>
    </div>
  )
}


// <div className='TecnoCon'>
//          <div className="TechnologyPlates" title='React'>
//             <Figure.Image src={reactimage} alt="React" width="120" height="120" />
//             {/* <span>React Js</span> */}
//          </div>
//          <div className="TechnologyPlates" title='Django'>
//             <Figure.Image src={djangoimage} width="120" height="120" alt="Django" />
//             {/* <span> Django</span> */}
//          </div>
//          <div className="TechnologyPlates" title='Vue Js"'>
//             <Figure.Image src={vueimage} width="120" height="120" alt="Vue Js" />
//             {/* <span>Vue Js</span> */}
//          </div>
//          <div className="TechnologyPlates" title='Angular Js'>
//             <Figure.Image src={angularimage} width="120" height="120" alt="Angular Js" />
//             {/* <span>Angular Js</span> */}
//          </div>
//          <div className="TechnologyPlates" title='Node Js'>
//             <Figure.Image src={nodeimage} width="120" height="120" alt="Node Js" />
//             {/* <span>Node Js</span> */}
//          </div>
//          <div className="TechnologyPlates" title='Mysql'>
//             <Figure.Image src={mysqlimage} width="120" height="120" alt="Mysql" />
//             {/* <span>MySql</span> */}
//          </div>
//          <div className="TechnologyPlates" title='Express Js'>
//             <Figure.Image src={expressimage} width="120" height="120" alt="Express Js" />
//             {/* <span>Express Js</span> */}
//          </div>
//          <div className="TechnologyPlates" title='MongoDB'>
//             <Figure.Image src={mongoimage} width="120" height="120" alt="MongoDB" />
//             {/* <span>MongoDB</span> */}
//          </div>
//       </div>