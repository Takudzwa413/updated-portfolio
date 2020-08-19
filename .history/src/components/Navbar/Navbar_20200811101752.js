import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './Navbar.scss';

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
            <Link to='/projects' className='btn btn-1'>
              <svg>
                <rect x='0' y='0' fill='none' width='100%' height='100%' />
              </svg>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/about' classNmae='btn btn-2'>
              About
            </Link>
          </li>
          <li>
            <Link to='testimonials' classNmae='btn-3'>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to='/contact' classNmae='btn-4'>
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Navbar;
