import React from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Header(){
    return(
        <div className="Header-Container">
            <Row >
                <Col  style={{padding: '50px', flexBasis: 'none !important'}}>
                    <h1>Gino Gentile</h1>
                    <p>React Projects</p>
                </Col>
                <Col  style={{padding: '50px', flexBasis: 'none !important'}}>
                    <p>Hi, welcome to my Portolio.
                    <br />
                    This space is my space to show my advance in my career for being a Front-End developer.
                    <br />
                    At this time, i know some of HTML, CSS, JS and React.
                    <br />
                    Also, i'll posted my favourites books, movies, series, course and more.
                    <br />
                    Please, feel free to leave me suggestions, critics or whatever you wants.
                    <br />
                    Thanks for pass
                    </p> 
                </Col>
            </Row>
            
                          
        </div>

    )
}


export default Header