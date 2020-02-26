import React, { Component } from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
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

          <Navbar color="dark" dark expand="md">

            {/* <NavbarToggler onClick={this.toggle} /> */}
            <Collapse isOpen={this.state.isOpen} navbar>
            
              <Nav className="ml-auto" navbar>
  
                <NavItem>
                    <NavLink href="/">Casefile App</NavLink>
                </NavItem>

                <NavItem>
                    <NavLink href="/crime_map">Crime Map</NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </Navbar>

      );
    }
  }
