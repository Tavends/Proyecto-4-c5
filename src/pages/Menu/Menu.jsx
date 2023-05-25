import { Container } from 'react-bootstrap';
import { Products } from './Products/Products.jsx';

export function Menu() {
  return (
    <Container>
      <h1>Menú</h1>
      <Products></Products>
    </Container>
  )
}