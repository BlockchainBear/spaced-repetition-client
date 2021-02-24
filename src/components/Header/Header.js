import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import Logo from '../../images/rocket-logo.png';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <span>{this.context.user.name}</span>
        <nav className="logoutNav">
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav className="loginNav">
        <div className='loginLink'><Link to="/login">Login</Link></div>
        <div className='signupLink'><Link to="/register">Sign up</Link></div>
      </nav>
    );
  }

  render() {
    return (
      <header className="headerB">
        <div className="navBox">
          <div className="logoBox">
            <h1 className="logo">
              <Link to="/">Spaced Repetition</Link>
            </h1>
            <img className="logoIcon" src={Logo} alt="Rocket Logo" />
          </div>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </div>
      </header>
    );
  }
}

export default Header;
