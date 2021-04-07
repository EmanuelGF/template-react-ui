import React from 'react'
import {
    Col,
    Container,
    Row
} from 'react-bootstrap'
import {
    Link
} from 'react-router-dom'

export default function About() {
   
    return (
        <Container fluid>
            <Row>
                <Col style={{textAlign:"center"}}>
                    <h1>Welcome to the about page!</h1>
                    <p style={{backgroundColor:"#ccc"}}>
                        This page is using a different layout thats why you dont see the nav and footer. 
                    </p>
                    <Link to="/" ><i className="fas fa-arrow-left"></i>{" "}home</Link>
                </Col>
            </Row>
        </Container>
    )
}