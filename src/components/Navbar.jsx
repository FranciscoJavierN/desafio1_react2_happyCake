import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavMenu() {
  return (
    <>
      <Navbar bg="danger" data-bs-theme="danger" className='justify-content-between p-3'>
        <Container>
          <Nav className="me-auto gap-4">
            <Link to="/" className='text-white text-decoration-none'>🏠Home</Link>
            <Link to="/contacto" className='text-white text-decoration-none'>📒Contacto</Link>
          </Nav>
          <Nav className='fw-bold text-white'>Happy Cake 🎂</Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu