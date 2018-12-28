import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Slider1 from '../src/components/slideshow';
import Slider2 from '../src/components/Slider2';
import Slider3 from '../src/components/slider3'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div>



        <div className="App">

        <Navbar fixed="top" color="light" light expand="xs" className="border-bottom border-gray bg-white " style={{ height: 80 }}>

            <Container>
              <Row className="position-relative w-100 align-items-center">

                <Col className="d-none d-lg-flex justify-content-start">
                  <Nav className="mrx-auto" navbarInverse>

                    <NavItem className="d-flex align-items-center">
                      <NavLink className="font-weight-bold" href="/">
                        <img src={'https://gif-avatars.com/img/150x150/donald-duck-x.gif'} alt="avatar" className="img-fluid rounded-circle" style={{ width: 36 }} />
                      </NavLink>
                    </NavItem>

                    <NavItem className="d-flex align-items-center">
                      <NavLink className="font-weight-bold" href="/">Auto Slide</NavLink>
                    </NavItem>

                    <NavItem className="d-flex align-items-center">
                      <NavLink className="font-weight-bold" href="/slider2">Manual Slide</NavLink>
                    </NavItem>

                    <NavItem className="d-flex align-items-center">
                      <NavLink className="font-weight-bold" href="/slider3">Third Party Slider</NavLink>
                    </NavItem>


                  </Nav>
                </Col>
              </Row>
            </Container>

          </Navbar>


            <header className="App-header">
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/" exact component={Slider1}/>
                            <Route path="/slider2" exact component={Slider2} />
                            <Route path="/slider3" exact component={Slider3} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </header>
        </div>
      </div>
    );
  }
}

export default App;
