import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">
              <Navbar.Brand>1-task</Navbar.Brand>
            </Link>
            <Link to="/second">
              <Navbar.Brand>2-task</Navbar.Brand>
            </Link>
            <Link to="/third">
              <Navbar.Brand>3-task</Navbar.Brand>
            </Link>
            <Link to="fourth">
              <Navbar.Brand>4-task</Navbar.Brand>
            </Link>
            <Link to="fifth">
              <Navbar.Brand>5-task</Navbar.Brand>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
