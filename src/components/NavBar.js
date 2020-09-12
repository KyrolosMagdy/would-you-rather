import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink
} from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import React, { PureComponent, Fragment } from "react";
import User from "./User";

class NavBar extends PureComponent {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { authedUser } = this.props;

    return (
      <div className="main-nav__container">
        <Navbar
          bg="primary"
          variant="dark"
          light
          expand="md"
          className="main-nav__adjusting"
        >
          <NavbarBrand tag={Link} to="/" className="text-white">
            Would You Rather
          </NavbarBrand>
          {authedUser && (
            <Fragment>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem className="main-nav__item">
                    <NavLink tag={Link} to="/add" className="text-white">
                      New Question
                    </NavLink>
                  </NavItem>
                  <NavItem className="main-nav__item">
                    <NavLink
                      tag={Link}
                      to="/leaderboard"
                      className="text-white"
                    >
                      LeaderBoard
                    </NavLink>
                  </NavItem>
                  <NavItem className="main-nav__item">
                    <User id={authedUser} />
                  </NavItem>
                  <NavItem className="main-nav__item">
                    <NavLink tag={Link} to="/logout" className="text-white">
                      Logout
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Fragment>
          )}
        </Navbar>
      </div>
    );
  }
}

NavBar.propTypes = {
  authedUser: PropTypes.string
};

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps, null)(NavBar));
