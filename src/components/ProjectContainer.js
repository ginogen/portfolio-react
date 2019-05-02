import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



function ProjectContainer(props){
    return(
        <Card style={{ width: '18rem', margin: '10px', boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)' }}>
  <Card.Img variant="top" src={props.img} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.text}
    </Card.Text>
    <Button variant="warning">Checkout</Button>
  </Card.Body>
</Card>

    )
}


export default ProjectContainer