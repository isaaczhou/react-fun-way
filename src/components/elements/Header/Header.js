import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="rmdb-header">
        <div className="rmdb-header-content">
          <Link to="/">
            <img
              src="./images/reactMovie_logo.png"
              alt="rmdb-logo"
              className="rmdb-logo"
            />
          </Link>
          <img
            src="./images/tmdb_logo.png"
            alt="tmdb-logo"
            className="rmdb-tmdb-logo"
          />
        </div>
      </div>
    );
  }
}
