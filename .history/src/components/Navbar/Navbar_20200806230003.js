import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <header className='header'>
        <a href='/' className='logo'>
          CORP
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon' />
        </label>
        <ul className='menu'>
          <Link to='/projects'>
            <a className='nav-link' href='projects'>
              Projects
            </a>
          </Link>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <a href='#forget'>Andrew</a>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Navbar;
