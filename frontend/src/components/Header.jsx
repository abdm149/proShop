import { Nav, Container, Navbar } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "../assets/styles/index.css"; // Correct import

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="ProShop"
              width="50"
              height="50"
              className="me-2"
            />
            <span className="brand-text">ProShop</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart" className="nav-link-custom">
                <FaShoppingCart className="me-1" /> Cart
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link-custom">
                <FaUser className="me-1" /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
