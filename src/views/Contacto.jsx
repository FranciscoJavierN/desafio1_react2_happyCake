import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import { useState } from "react";

const Contacto = () => {

  const [correo, setCorreo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    setCorreo("");
    setDescripcion("");
  }

  return (
    <>
      <Container className="p-5 text-center" onSubmit={validarDatos}>
        <h1>Cuentanos, ¿En que te podemos ayudar?</h1>
        <Form className="p-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Correo:</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setCorreo(e.target.value)} value={correo}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => setDescripcion(e.target.value)} value={descripcion}/>
          </Form.Group>
          <Button variant="danger" type="submit">
            Enviar
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Contacto;