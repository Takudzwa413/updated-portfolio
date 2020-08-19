import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <header className='header'>
        <a href='/' className='logo'>
          <h3>
            Takudzwa<span>Vengai</span>
          </h3>
        </a>
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon' />
        </label>
        <ul className='menu'>
          <li>
            <Link to='/projects' className='page1'>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/about' classNmae='page2'>
              About
            </Link>
          </li>
          <li>
            <Link to='testimonials' classNmae='page3'>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to='/contact' classNmae='page4'>
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Navbar;
