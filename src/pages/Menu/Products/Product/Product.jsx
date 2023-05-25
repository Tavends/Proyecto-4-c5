import { Card } from 'react-bootstrap';

import "./product.css";
export function Product( { name, description, price, img } ) {

  return (
    <Card style={ { width: "18rem" } }>
      <Card.Img variant='top' src={ img }></Card.Img>
      <Card.Body className='card-body-text'>
        <Card.Title>
          { name }
        </Card.Title>
        <Card.Text>
          { description }
        </Card.Text>
      </Card.Body>
      <Card.Body className='card-body-text'>
        <Card.Text>
          { price }
        </Card.Text>
      </Card.Body>

    </Card>
  )
}