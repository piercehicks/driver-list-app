import React from 'react';
import CreateDriver from "./components/CreateDriver";
import EditDriver from "./components/EditDriver";
import DriverList from "./components/DriverList";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-driver"} className="nav-link">
                Company Drivers 
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-driver"} className="nav-link">
                  Create Driver
                </Link>
              </Nav>


              {/* <Nav>
                <Link to={"/edit-student/:id"} className="nav-link">
                  Edit Student
                </Link>
              </Nav> */}

              <Nav>
                <Link to={"/driver-list"} className="nav-link">
                  Driver List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateDriver} />
                <Route path="/create-driver" component={CreateDriver} />
                <Route path="/edit-driver/:id" component={EditDriver} />
                <Route path="/driver-list" component={DriverList} />
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}


export default App;
