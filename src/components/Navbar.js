import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/actionCreator';
import Swal from 'sweetalert2'

export default function MyNavbar () {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitLogout = (e) => {
    e.preventDefault()
    localStorage.clear()
    navigate('/login')
    Swal.fire(
      'Success Logout!',
      'Thank you for using our services!',
      'success'
    )
  }

  return ( 
    <Navbar bg="dark" variant="dark" expand="lg" style={{fontFamily: "monospace" }}>
      {/* <Container> */}
        <Navbar.Brand href="/"><img className="img-fluid" style={{width: "100px"}} src='/v-logo2.jpg'/></Navbar.Brand>
        <Navbar.Brand href="/">Vintager Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={"m-3"} to="/">Home</Link>
            <Link className={"m-3"} to={"product"}>Add Product</Link>
            <Link className={"m-3"} to={"categories"}>Categories</Link>
            <Link className={"m-3"} to={"register"}>Admin Registration</Link>
           
          </Nav>
            <Button className={"btn-danger"} style={{backgroundColor: "rgb(100,0,0)"}} onClick={submitLogout}>Logout </Button>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}