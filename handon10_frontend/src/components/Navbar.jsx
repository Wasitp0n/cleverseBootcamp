import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import classes from "./Navbar.module.css";

const Navbarn = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <div>
            <Navbar.Brand href="#home">LearnHub</Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  Login
                </Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <div className={classes.sty}>
        <h1> Learn Hub</h1>
        <h3>Hub for Educational Videos</h3>
      </div>
    </div>
  );
};

export default Navbarn;
