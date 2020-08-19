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
      <div className='_30ss _3-8j'>
        <div className='_6atm' style={{ height: '187px' }}>
          <span>
            <div className='_j68'>
              <div className='promptHeaderContainer'>
                <div className='promptHeaderCloseButtonContainer'>
                  <div className='_2t-5' tabIndex={0} role='button'>
                    <svg width='10px' height='10px' viewBox='0 0 14 14'>
                      <g
                        stroke='none'
                        strokeWidth={1}
                        fill='none'
                        fillRule='evenodd'
                      >
                        <g transform='translate(-419.000000, -413.000000)'>
                          <g transform='translate(164.000000, 396.000000)'>
                            <g>
                              <g transform='translate(250.000000, 12.000000)'>
                                <g>
                                  <g>
                                    <rect
                                      opacity='0.200000003'
                                      x={0}
                                      y={0}
                                      width={24}
                                      height={24}
                                    />
                                    <g
                                      transform='translate(4.000000, 4.000000)'
                                      fill='#000000'
                                    >
                                      <rect
                                        transform='translate(8.000000, 8.000000) rotate(45.000000) translate(-8.000000, -8.000000) '
                                        x={7}
                                        y={-1}
                                        width={2}
                                        height={18}
                                        rx={1}
                                      />
                                      <rect
                                        transform='translate(8.000000, 8.000000) rotate(135.000000) translate(-8.000000, -8.000000) '
                                        x={7}
                                        y={-1}
                                        width={2}
                                        height={18}
                                        rx={1}
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className='profilePictureContainer'>
                  <div className='_4cqr'>
                    <img
                      className='profilePicture img'
                      src='https://scontent.fcpt1-1.fna.fbcdn.net/v/t1.0-1/cp0/p80x80/106601475_132323915183010_7542637591842845211_n.jpg?_nc_cat=104&_nc_sid=dbb9e7&_nc_ohc=ipwJESW67gcAX-WNSIc&_nc_ht=scontent.fcpt1-1.fna&oh=5a08dea5bcb278845293979070f6c0a5&oe=5F428B6A'
                      alt=''
                    />
                    <div className='clearfix' />
                  </div>
                </div>
                <div className='promptHeaderAndBubbleContainer'>
                  <div
                    className='promptHeaderText _4ik4 _4ik5'
                    style={{ WebkitLineClamp: 2 }}
                  >
                    <strong>blog_mygistmate</strong>
                  </div>
                  <div className='promptTextBubble'>
                    <span className='truncateOverflow'>
                      <span>
                        Hi! We're here to answer any questions you may have.
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className='fillerDiv' />
              <div className='promptFooterContainer'>
                <div
                  className='_4bqf promptButton'
                  tabIndex={0}
                  role='button'
                  style={{ backgroundColor: 'rgb(0, 132, 255)' }}
                >
                  <i
                    className='messengerIcon img sp_rNAt0A3npPs_1_5x sx_4ec136'
                    alt=''
                  />
                  Continue as Takudzwa
                </div>
                <a className='_4bqf notYouLink' href='#'>
                  Not you? Log into Messenger
                </a>
                <div className='subButtonText' />
              </div>
            </div>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
