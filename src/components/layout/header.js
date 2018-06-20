import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

// import { toggleWhatIsThis } from 'actions';
// import { toggleTour } from 'actions';
// import { getCurrentUser } from '../../actions/authentication';
// import { getSuggestions } from 'actions/search';
import Icon from '../shared/icon';
import UserProfileImage from '../users/user-profile-image';
import WhatIsThis from './what-is-this';
import SearchBox from './search-box';
import Tour from '../shared/tour';
// import { logout } from '../../actions/authentication';


var logoUrl = '../../images/killrvideo.png'

class HeaderContainer extends React.Component {
  componentDidMount() {
      //get current user here
    // this.props.getCurrentUser(Header.queries.currentUser());
  }
    
  submitSearch(q) {
    // this.props.push({
    //   pathname: '/search/results',
    //   query: { q }
    // });
  }
    
  startTour(logout) {
    // If current user is signed in, sign them out so tour steps work correctly ("Register" button needs to be available)
    if (logout) this.props.push('/account/signout');
    
    this.props.toggleTour();    
  }

  render() {
    // Leave these undefined if we haven't gotten the current user information from the server yet
    let loggedInMenu, signIn, register;
    
    if (this.props.currentUser.isLoggedIn === true) {
      // Menu for logged in users
      let { firstName, lastName, email } = this.props.currentUser.info;
      let menuTitle = 'My Account';
      if (!!firstName && !!lastName && !!email) {
        menuTitle = (
          <span>
            {firstName + ' ' + lastName + ' '}
            <UserProfileImage email={email} className="small img-circle" />
          </span>
        );
      }
      
      loggedInMenu = (
        <NavDropdown eventKey={4} title={menuTitle} id="loggedin-user">
          <MenuItem eventKey={4.1} onSelect={e => this.props.push('/account/info')}>
            <Icon name="cog" fixedWidth /> My Account
          </MenuItem>
          <MenuItem eventKey={4.2} onSelect={e => this.props.push('/videos/add')}>
            <Icon name="video-camera" fixedWidth /> Add a Video
          </MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={4.3} onSelect={e => this.props.push('/account/signout')}>
            <Icon name="sign-out" fixedWidth /> Sign Out
          </MenuItem>
        </NavDropdown>
        
      );
    } 
    
    if (this.props.currentUser.isLoggedIn === false) {
      // Buttons for logging in or registering the site
      signIn = (
        <NavItem id="sign-in" eventKey={2} href="#" onSelect={e => this.props.push('/account/signin')} className="text-uppercase">
          Sign in
        </NavItem>
      );
      register = (
        <NavItem id="register" eventKey={3} href="#" onSelect={e => this.props.push('/account/register')} className="bg-success text-uppercase">
          Register
        </NavItem>
      );
    }
      
    return (
      <div id="header">
        <Navbar fixedTop id="navbar-main">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" id="logo">
                <img src={logoUrl} alt="KillrVideo.com Logo" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
              <SearchBox onSubmit={vals => this.submitSearch(vals.query)} getSuggestions={this.props.getSuggestions} />
            <Nav navbar pullRight> 
              <NavItem id="show-tour" eventKey={1} href="#" onSelect={e => this.startTour(this.props.currentUser.isLoggedIn)} >
                <Icon name="map-signs" fixedWidth /> Tour: <span>{this.props.showTour ? 'On' : 'Off'}</span>
              </NavItem> 
              <NavItem eventKey={1} href="#" onSelect={e => this.props.toggleWhatIsThis()} className={this.props.showWhatIsThis ? 'dropup' : ''}>
                What is this? <span className="caret"></span>
              </NavItem>
              {signIn}
              {register}
              {loggedInMenu}
            </Nav>
          </Navbar.Collapse>
          
        </Navbar>
        
        <WhatIsThis showWhatIsThis={this.props.showWhatIsThis} toggleWhatIsThis={this.props.toggleWhatIsThis} />
        <Tour showTour={this.props.showTour} toggleTour={this.props.toggleTour} />

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication: { currentUser }, whatIsThis, tour, search } = state;
  return {
    currentUser: currentUser,
    showWhatIsThis: whatIsThis.visible,
    showTour: tour.visible,
    searchSuggestions: search.suggestions
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toggleWhatIsThis: () => {
            dispatch(toggleWhatIsThis())
        },
        toggleTour: () => {
            dispatch(toggleTour())
        },
        getCurrentUser: () => {
            // dispatch(getCurrentUser())
        },
        getSuggestions: () => {
            // dispatch(getSuggestions())
        },
    }
}

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderContainer)

export default Header

