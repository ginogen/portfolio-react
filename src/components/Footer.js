import React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Footer(){

    const StyleFooter = {
        color: 'black', 
        textAlign: 'center', 
        padding: '70px 0'
    }

    return(
        <div className="Footer">
            <Row>
                <Col>
                    <h2 style={StyleFooter}>
                    Contact me to 
                    <br />
                    <span>ginogentile@live.com</span>
                    </h2>
                </Col>
                <Col>
                    <h2 style={StyleFooter}>
                    Connect with me 
                    <a href="https://www.linkedin.com/in/gino-gentile/" target="_blank" rel="noopener noreferrer"><br /><i style={{cursor: 'pointer'}} class="fab fa-linkedin"></i></a>
                    </h2>
                </Col>
            </Row>    
        </div>
    )
}

export default Footer