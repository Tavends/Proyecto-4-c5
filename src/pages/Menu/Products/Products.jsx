import { Col, Container, Row, Spinner } from 'react-bootstrap'
import { Product } from './Product/Product.jsx'

import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../../../config/firestore.js'
import "./products.css"
export function Products() {

  const [ products, setProducts ] = useState( [] )
  const [ loadingData, setLoadingData ] = useState( true )
  useEffect( () => {
    const obtenerProductos = async () => {
      const collectionRef = collection( db, "Productos" )
      const querySnapshot = await getDocs( collectionRef )
      const products = querySnapshot.docs.map( doc => {
        return { id: doc.id, ...doc.data() }
      } )
      setProducts( products )
      setLoadingData( false )
    }
    try {
      obtenerProductos()
    } catch ( error ) {
      console.error( error )
      setLoadingData( false )
    }
  } )

  return (
    <Container>
      <Row className='products'>
        { loadingData ? <Spinner animation='border' role='status'></Spinner> : products.map( ( product, index ) => {
          const { name, description, price, img } = product
          const key = `product-${ index }`
          return (
            <Col key={ key }>
              <Product name={ name } description={ description } price={ price } img={ img }></Product>
            </Col>
          )
        } ) }
      </Row>
    </Container>
  )
}