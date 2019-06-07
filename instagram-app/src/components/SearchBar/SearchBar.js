import React from 'react';
import './SearchBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  

export default class SearchBar extends React.Component {
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
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Cam | Instaclone</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <input 
                className="input"
                type="text"
                name="task"
                placeholder="Search"
                value= {this.props.newSearch}
                onChange={this.props.changeHandler}
                onSubmit={this.props.searchFilter}
              />
              <Nav className="ml-auto" navbar>

                <NavItem>
                  <NavLink href="/components/">Nav</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>Heart</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>User</NavLink>
                </NavItem>
                {/* <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    User
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown> */}
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
