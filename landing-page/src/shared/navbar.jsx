import React from "react";
import { connect } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import PropTypes from "prop-types";
import Logo from "../static/img/logo final .png";

export default class Navbar extends React.Component {
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWidthEnough: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  adminPanel() {
    if (true || this.props.user) {
      if (true || this.props.user.account.isStaff) {
        return (
          <MDBNavItem>
            <MDBNavLink to='/'>Dashboard</MDBNavLink>
          </MDBNavItem>
        );
      }
    }
    return;
  }

  render() {
    // const isAuthenticated = this.props.isAuthenticated && this.props.user;
    const isAuthenticated = true;
    const auth = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to='/'>Profile</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to='/'>Logout</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    );

    const guest = (
      <MDBNavbarNav right>
        <MDBNavItem>
          <MDBNavLink to='/'>Login</MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink to='/'>Signup</MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    );

    return (
      <MDBNavbar
        color='white'
        light
        expand='md'
        fixed='top'
        className='z-depth-0'
        scrolling
      >
        <MDBContainer className='w-100' size='100%'>
          {!this.state.isWidthEnough && (
            <MDBNavbarToggler onClick={this.onClick} />
          )}
          <MDBCollapse isOpen={this.state.collapse} navbar>
            <MDBNavbarNav left>
              {/* <MDBDropdown size='sm'>
                <MDBDropdownToggle nav caret color='amber'>
                  Education
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Law (LL.B)</MDBDropdownItem>
                  <MDBDropdownItem>HSC</MDBDropdownItem>
                  <MDBDropdownItem>SSC</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown> */}
              <MDBDropdown size='sm'>
                <MDBDropdownToggle nav caret color='amber'>
                  Exam Preparation
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem header size='lg'>
                    Legal
                  </MDBDropdownItem>
                  <MDBDropdownItem>Bar Council Exam</MDBDropdownItem>
                  <MDBDropdownItem>Juciary Exam</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem header>Job</MDBDropdownItem>
                  <MDBDropdownItem>BCS</MDBDropdownItem>
                  <MDBDropdownItem>Bank Jobs</MDBDropdownItem>
                  <MDBDropdownItem>Other Govt Jobs</MDBDropdownItem>
                  <MDBDropdownItem divider />
                  <MDBDropdownItem header>Admission Exam</MDBDropdownItem>
                  <MDBDropdownItem>University Exam</MDBDropdownItem>
                  <MDBDropdownItem>Engineering Exam</MDBDropdownItem>
                  <MDBDropdownItem>Medical Exam</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown size='sm'>
                <MDBDropdownToggle nav caret color='amber'>
                  Legal Service
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Income Tax</MDBDropdownItem>
                  <MDBDropdownItem to='/drafting'>Legal Drafts</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBDropdown size='sm'>
                <MDBDropdownToggle nav caret color='amber'>
                  Legal Research
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem>Database</MDBDropdownItem>
                  <MDBDropdownItem>Articles</MDBDropdownItem>
                  <MDBDropdownItem>Statutes</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>

              {/* {this.adminPanel()} */}
            </MDBNavbarNav>
            <MDBNavbarNav left>
              <MDBNavbarBrand href='/'>
                <strong>
                  <img src={Logo} alt='logo' width='80px' height='auto' />
                  {/* Ask Riashad */}
                </strong>
              </MDBNavbarBrand>
            </MDBNavbarNav>
            {/* <MDBBtnGroup>
              <MDBBtn color='amber'>User Name</MDBBtn>
              <MDBDropdownToggle basic />
              <MDBDropdownItem>Profile</MDBDropdownItem>
              <MDBDropdownItem>Sign Out</MDBDropdownItem>
            </MDBBtnGroup> */}
            <MDBNavbarNav right ml-0>
              <MDBDropdown size='sm'>
                <MDBDropdownToggle nav caret color='amber'>
                  Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem to='/profile'>Setting</MDBDropdownItem>
                  <MDBDropdownItem to='/logout'>Sign Out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarNav>
            {/* {isAuthenticated ? auth : guest} */}
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

// export default connect(mapStateToProps)(Navbar);
