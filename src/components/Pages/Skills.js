import React, { Fragment } from 'react';

const Skills = () => {
  return (
    <Fragment>
      <div className='about-me'>
        <div className='containerB'>
          <div className='info'>
            <h2>Skills</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt Duis aute irure dolor in reprehenderit
              Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do
              eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt Duis aute irure dolor in reprehenderit .
            </p>
            <div className='hobbies'>
              {/* Start Box Content */}
              <div className='content'>
                {/* Start Icon */}
                <div className='icon'>
                  <i className='fa fa-paint-brush fa-2x' />
                </div>
                {/* End Icon */}
                {/* Start Text */}
                <div className='text'>
                  <h3>React.js</h3>
                  <div className='progress progress-striped'>
                    <div
                      className='progress-bar progress-bar-danger'
                      role='progressbar'
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '60%' }}
                    >
                      <span>60% Complete </span>
                    </div>
                  </div>
                </div>
                {/* End Text */}
              </div>
              {/* End Box Content */}
              {/* Start Box Content */}
              <div className='content'>
                {/* Start Icon */}
                <div className='icon'>
                  <i className='fa fa-users  fa-2x' />
                </div>
                {/* End Icon */}
                {/* Start Text */}
                <div className='text'>
                  <h3>JavaScript</h3>
                  <div className='progress progress-striped'>
                    <div
                      className='progress-bar progress-bar-danger'
                      role='progressbar'
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '60%' }}
                    >
                      <span>60% Complete </span>
                    </div>
                  </div>
                </div>
                {/* End Text */}
              </div>
              {/* End Box Content */}
              {/* Start Box Content */}
              <div className='content'>
                {/* Start Icon */}
                <div className='icon'>
                  <i className='fa fa-magic fa-2x' />
                </div>
                {/* End Icon */}
                {/* Start Text */}
                <div className='text'>
                  <h3>Python</h3>
                  <div className='progress progress-striped'>
                    <div
                      className='progress-bar progress-bar-danger'
                      role='progressbar'
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '85%' }}
                    >
                      <span>85% Complete </span>
                    </div>
                  </div>
                </div>
                {/* End Text */}
              </div>
              {/* End Box Content */}
              {/* Start Box Content */}
              <div className='content'>
                {/* Start Icon */}
                <div className='icon'>
                  <i className='fa fa-line-chart fa-2x' />
                </div>
                {/* End Icon */}
                {/* Start Text */}
                <div className='text'>
                  <h3>MySQL</h3>
                  <div className='progress progress-striped'>
                    <div
                      className='progress-bar progress-bar-danger'
                      role='progressbar'
                      aria-valuenow={80}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      style={{ width: '90%' }}
                    >
                      <span>80% Complete </span>
                    </div>
                  </div>
                </div>

                {/* End Text */}
              </div>
              {/* End Box Content */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Skills;
