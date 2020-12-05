import React,{Component} from "react";
import {Link} from "react-router-dom";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Navbar from "../../node_modules/react-bootstrap/Navbar";

class Navigation extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" expand="md" className="bg-transparent position-absolute w-100" collapseOnSelect>
                <Navbar.Brand>
                    <Link to="/" className="text-white font-weight-bold font-logo decoration-none">
                        <img src="/img/navbar_logo.png" alt="logo" className="mr-2"/>
                        Optician
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="ml-auto text-right font-weight-bold">
                        <Nav.Item>
                            <Link to="/" className="nav-link text-light">
                                Home
                            </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;