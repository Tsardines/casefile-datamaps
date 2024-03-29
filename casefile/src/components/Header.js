import React from 'react';

import "./Header.css";

import {
    Collapse,
    Navbar,
    // NavbarToggler,
    // NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';


  export default class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (

          <Navbar className="nav_container" dark expand="md">

            {/* <NavbarToggler onClick={this.toggle} /> */}
            <Collapse isOpen={this.state.isOpen} navbar>
            
              <Nav className="mr-auto" navbar>
  
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/map">Crime Map</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/ratings">Episode Ratings</NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>

      );
    }
  }
