import React from "react";
import logo from '../../logo.svg';

import {
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Row,
    UncontrolledDropdown
} from 'reactstrap';

const AVATAR = 'https://www.joho.se/wp-content/uploads/2017/11/cropped-samurai-ninja-avatar-warrior-icon-1.png';


const Header = (props) => (
    <header>
        <Navbar fixed="top" light expand="xs" className="border-bottom border-gray bg-dark" style={ { height: 60 } }>

            <Container>
                <Row noGutters className="position-relative w-100 align-items-center">

                    <Col className="d-none d-lg-flex justify-content-start">
                        <Nav className="mrx-auto" navbar>

                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold" href="/">
                                    <img src={ AVATAR } alt="avatar" className="img-fluid rounded-circle"
                                         style={ { width: 36 } }/>
                                </NavLink>
                            </NavItem>

                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold" href="/">Home</NavLink>
                            </NavItem>

                            <NavItem className="d-flex align-items-center">
                                <NavLink className="font-weight-bold" href="/">Events</NavLink>
                            </NavItem>

                            <UncontrolledDropdown className="d-flex align-items-center" nav inNavbar>
                                <DropdownToggle className="font-weight-bold" nav caret>Learn</DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem className="font-weight-bold text-secondary text-uppercase" header
                                                  disabled>Learn React</DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>Documentation</DropdownItem>
                                    <DropdownItem>Tutorials</DropdownItem>
                                    <DropdownItem>Courses</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                        </Nav>
                    </Col>

                    <Col className="d-flex justify-content-xs-start justify-content-lg-center">
                        <NavbarBrand className="d-inline-block p-0" href="/" style={ { width: 80 } }>
                            <img src={ logo } alt="logo" className="position-relative img-fluid"/>
                        </NavbarBrand>
                    </Col>

                    <Col className="d-none d-lg-flex justify-content-end">
                        <Form inline>

                        </Form>
                    </Col>

                </Row>
            </Container>

            <NavItem className="d-flex  font-weight-bold text-primary">
                { props.isAuth ? props.login
                    : <NavLink className="font-weight-light" href={ '/login' }>Login</NavLink> }
            </NavItem>
        </Navbar>
    </header>
);

export default Header;