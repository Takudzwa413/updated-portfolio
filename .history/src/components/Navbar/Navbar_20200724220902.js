import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <Fragment>
      <div>
        <div className='navigation-wrap bg-light start-header start-style'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <nav className='navbar navbar-expand-md navbar-light'>
                  <div className='left_area'>
                    <h3>
                      Takudzwa<span>Vengai</span>
                    </h3>
                  </div>
                  <button
                    class='navbar-toggler'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                  >
                    <span class='navbar-toggler-icon'></span>
                  </button>
                  <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav ml-auto py-4 py-md-0'>
                      <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4 active'>
                        <Link to='/'>
                          <a
                            className='nav-link '
                            data-toggle='dropdown'
                            href='/'
                            role='button'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                        <Link to='/projects'>
                          <a className='nav-link' href='projects'>
                            Projects
                          </a>
                        </Link>
                      </li>
                      {/* <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                        <a className='nav-link' href='skills'>
                          Skills
                        </a>
                      </li> */}
                      <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                        <Link to='/about'>
                          <a
                            className='nav-link '
                            data-toggle='dropdown'
                            href='about'
                            role='button'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            About
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                        <Link to='testimonials'>
                          <a className='nav-link' href='testimonials'>
                            Testimonials
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item pl-4 pl-md-0 ml-0 ml-md-4'>
                        <Link to='/contact'>
                          <a className='nav-link' href='contact'>
                            Contact
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
