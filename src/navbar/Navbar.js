import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom' 


//Exercise 2:
// Replace the unordered list with this react-strap navbar. Use the Link Components
// to keep functionality working the way it should. When the application title
// (Router Example) is clicked on, it should take the user to the "home" page ("/" as a path)

export default class AppNav extends React.Component {
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
      <div>
        <Navbar color="faded" light expand="md">
          <Link to="/" className="navbar-brand">Router Example</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/about">About</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-link" to="/different">Different</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

}
