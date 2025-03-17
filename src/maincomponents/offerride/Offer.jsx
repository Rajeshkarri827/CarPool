import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Nav,
  Tab,
  Form,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "./Offer.css";

function Offer() {
  return (
    <>
      {/* Top Navigation */}
      <Navbar expand="lg" className="navbar-dark bg-black">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
            Carpool
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/find" className="text-white">
                Find a Ride
              </Nav.Link>
              <Nav.Link as={Link} to="/offerpage" className="text-white">
                Offer a Ride
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className="text-white">
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="offer-container">
        <Container className="py-4">
          <Row>
            <Col>
              <h2 className="text-black fw-bold mb-4">Offer a Ride</h2>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="map-tabs shadow-sm rounded p-4 bg-white">
                <Tab.Container defaultActiveKey="startLocation">
                  <Nav variant="tabs" className="mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="startLocation" className="text-black">
                        Select Start Location
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="endLocation" className="text-black">
                        Select End Location
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="startLocation">
                      <div className="map-error text-center py-5">
                        <h5 className="text-muted">
                          Oops! Something went wrong.
                        </h5>
                        <p className="text-muted">
                          This page didn&apos;t load Google Maps correctly. See
                          the JavaScript console for technical details.
                        </p>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="endLocation">
                      <div className="map-error text-center py-5">
                        <h5 className="text-muted">
                          Oops! Something went wrong.
                        </h5>
                        <p className="text-muted">
                          This page didn&apos;t load Google Maps correctly. See
                          the JavaScript console for technical details.
                        </p>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={3}>
              <Form.Group controlId="date">
                <Form.Label className="fw-bold text-black">Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={3}>
              <Form.Group controlId="time">
                <Form.Label className="fw-bold text-black">Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Offer;
