import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import index from "../assets/styles/index.css";

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                     ProShop &copy; {currentYear}
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer