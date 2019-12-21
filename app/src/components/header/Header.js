import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
    <div className="nav-header">
      <nav className="navbar">
      <ul>
        <li>
          <Link to={'/app'} className="navbar-logo">Home</Link>
        </li>
        <li>
          <Link to={'/app/list'} className="navbar-logo">Listagem</Link>
        </li>
        <li>
          <Link to={'/app/create'} className="navbar-logo">Cadastro</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;