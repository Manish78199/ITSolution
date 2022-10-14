import React from 'react'

import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'



export default function Contact2() {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            paddingTop: '30px',
            height: '680px',
            alignItems: 'flex-start',
            backgroundColor: '#0d6efd',
            justifyContent: 'center'
        }}>
            <div className="Conatact_Con" style={{
                display: 'flex',
                boxShadow: '0px 0px 20px 20px #3a353517',
                width: '80%',
                borderRadius: '2px',
                columnGap: '50px',
                height: '70%',
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center'
            }}>

                <div className="Contact_left_con" style={{
                    width: '50%',
                    display: 'flex',
                    height: '200px',
                    width: '352px',
                    flexDirection: 'column',
                    textAlign: 'left'
                }}>
                    <h5 style={{
                        fontWeight: 'bold',
                        fontFamily: '"Roboto"'
                    }}>Get In touch</h5>
                    <p style={{fontWeight:"bold"}}>
                        Call Us 24/7 for any query 
                        contact us feel free 
                        we provide best services as posibles

                    </p>

                </div>

                <Form style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: 'max-content',
                    background: 'white',
                    width: '350px',
                    marginTop: '204px',
                    boxShadow: '0 0 20px 8px #80808042',
                    padding: '20px',
                    justifyContent: 'center',
                    fontFamily: 'Questrial',

                }}>
                    <h5 style={{
                        textAlign: 'left',
                        fontFamily: 'Questrial',
                       
                    }}>Say Something</h5>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Your Name" required />
                        {/* <Form.Label>Email address</Form.Label> */}
                        <br/>
                        <Form.Control type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        {/* <Form.Label>Message</Form.Label> */}
                        <Form.Control as="textarea" aria-label=" With textarea" required placeholder="Message" style={{ height: "200px" }} />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}
