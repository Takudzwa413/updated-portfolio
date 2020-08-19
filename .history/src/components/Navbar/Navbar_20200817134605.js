import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Overdrive from 'react-overdrive';

const Navbar = (props) => {
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
          <Overdrive id='bender-to-big-fry'>
            <li>
              <Link to='/projects' className='page-1'>
                Projects
              </Link>
            </li>
          </Overdrive>
          <li>
            <Link to='/about' classNmae='page-2'>
              About
            </Link>
          </li>
          <li>
            <Link to='testimonials' classNmae='page-3'>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to='/contact' classNmae='page-4'>
              Contact
            </Link>
          </li>
        </ul>
      </header>
    </Fragment>
  );
};

export default Navbar;
