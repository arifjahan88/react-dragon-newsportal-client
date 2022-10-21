import { useContext } from "react";
import { Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import LeftSideNav from "../LeftSidenav/LeftSideNav";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const Hundlelogoutclick = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="mb-3"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">Dragon NewsPortal</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">All News</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link>
                {user?.uid ? (
                  <>
                    <span>{user?.displayName}</span>
                    <Button className="ms-2" onClick={Hundlelogoutclick}>
                      Log Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login">LogIn</Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </Nav.Link>
              <Nav.Link>
                {user?.photoURL ? (
                  <Image
                    roundedCircle
                    style={{ height: "40px" }}
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Nav.Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav></LeftSideNav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
