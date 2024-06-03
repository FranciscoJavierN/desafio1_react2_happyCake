import React from 'react'
import { Container } from "react-bootstrap";
import tortaImg from "../assets/img/images.jpg";

const Home = () => {
  return (
    <>
      <Container className='text-center p-5'>
        <h1>Bienvenido a <span className='fw-bold text-danger'>Happy Cake</span></h1>
        <h6>El lugar de los pasteles felices</h6>
        <img src={tortaImg} alt="Imagen Torta" className='w-50 pt-5' />
      </Container>
    </>
  )
}

export default Home