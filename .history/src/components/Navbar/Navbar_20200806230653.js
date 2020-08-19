import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <header className='header'>
        <div className='left_area'>
          <h3>
            Takudzwa<span>Vengai</span>
          </h3>
        </div>
        <a href='/' className='logo'>
          CORP
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon' />
        </label>
        <ul className='menu'>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='testimonials'>Testimonials</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
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
