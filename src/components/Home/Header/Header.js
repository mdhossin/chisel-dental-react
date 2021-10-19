import React from "react";
import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../images/icon.ico";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
// this is the header page
const Header = () => {
  const { user, signOutUser } = useAuth();
  return (
    <div>
      <Navbar className="navBar" bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-logo" href="#">
            <div className="d-flex align-items-center justify-content-center">
              <img src={logo} alt="" />
              <span className="navbrand ms-2">CHISEL DENTAL</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Stack className="main-nav" direction="horizontal" gap={2}>
                <NavLink
                  className="nav-link nav-item"
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#fb814e",
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link nav-item"
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#fb814e",
                  }}
                >
                  About Us
                </NavLink>

                <NavLink
                  className="nav-link nav-item"
                  to="/allservices"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#fb814e",
                  }}
                >
                  Services
                </NavLink>
                <NavLink
                  className="nav-link nav-item"
                  to="/blogs"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#fb814e",
                  }}
                >
                  Blogs
                </NavLink>
                <NavLink
                  className="nav-link nav-item"
                  to="/contactus"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#fb814e",
                  }}
                >
                  Contact Us
                </NavLink>
              </Stack>
            </Nav>

            <div>
              {user?.email ? (
                <NavLink
                  className="nav-link nav-item"
                  to="/login"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#fb814e",
                  }}
                >
                  <span style={{ marginLeft: "10px", marginRight: "10px" }}>
                    {user?.displayName}
                  </span>
                  <Button onClick={signOutUser} variant="danger">
                    Signout
                  </Button>
                </NavLink>
              ) : (
                <NavLink
                  className="nav-link nav-item"
                  to="/login"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#fb814e",
                  }}
                >
                  <Button variant="danger">Login</Button>
                </NavLink>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
