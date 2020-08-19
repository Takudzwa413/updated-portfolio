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
        <input className='menu-btn' type='checkbox' id='menu-btn' />
        <label className='menu-icon' htmlFor='menu-btn'>
          <span className='nav-icon' />
        </label>
        <ul className='menu'>
          <li>
            <a href='#dont'>Follow</a>
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
