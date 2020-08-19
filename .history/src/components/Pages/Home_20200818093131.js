import React, { Fragment } from 'react';
import './Home.css';
import Typed from 'react-typed';

const Home = () => {
  return (
    <Fragment>
      <div className='ring first'></div>
      <div className='ring second'></div>
      <div className='ring third'></div>
      <div className='container'>
        <div>
          <img
            alt='logo'
            className='myimage'
            src='https://media-exp1.licdn.com/dms/image/C4E03AQGQmZZZi0TqvA/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=2C2ZzWfbNt5TzSBeyNvoAL5PhQSw-NJ6M_anLTtJ_qs'
          />
        </div>

        <div className='animated zoomIn' id='content'>
          <hr />
          <h1>Takudzwa Vengai</h1>
          <h2>Software Developer</h2>
          <hr />
        </div>

        <p className='intro-subtitle'>
          <span className='text-slider-items'></span>
          <strong className='text-slider'>
            <Typed
              strings={[
                'Potential Junior Full Stack Developer',
                'Lets Get To Know Each Other.',
              ]}
              typeSpeed={80}
              backDelay={1100}
              backSpeed={30}
              loop
            />
          </strong>
        </p>
      </div>

      <div className='center'>
        <div id='social'>
          <ul>
            <li className='instagram'>
              <button className='border'>
                <a
                  href=' https://github.com/Takudzwa413'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fab fa-github-alt'></i>
                </a>
              </button>
            </li>

            <li className='twitter'>
              <button className='border'>
                <a
                  href='https://codepen.io/Takudzwa456'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i class='fab fa-codepen'></i>
                </a>
              </button>
            </li>
            <li className='instagram'>
              <button className='border'>
                <a
                  href=' mailto:tvengai75@gmail.com"'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-envelope-open' />
                </a>
              </button>
            </li>
            <li className='dribbble'>
              <button className='border'>
                <a
                  href=' tel:+27670018776'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fa fa-phone' />
                </a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
