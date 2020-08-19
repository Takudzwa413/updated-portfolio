import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import './Project.css';

const Projects = () => {
  return (
    <Fragment>
      <div className='work'>
        <div className='cards-container'>
          <div className='card' style={{ margin: '70px auto' }}>
            <div
              className='card-image'
              style={{
                backgroundImage:
                  'linear-gradient(-225deg, rgba(0,101,168,0.0) 0%, rgba(0,36,61,0.0) 50%), url("https://thumbs.gfycat.com/AdorableAbsoluteJavalina-max-1mb.gif")',
              }}
            ></div>
            <div className='card-footer'>
              <span className='work-name'>Netflix </span>
              <span className='work-description'>
                Watch your Netflix Trailers of any latest movies .
              </span>
              <a
                href='https://taku-netflix.netlify.app/'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                vist
              </a>
            </div>
          </div>
          <div className='card' style={{ margin: '70px auto' }}>
            <div
              className='card-image-slice'
              style={{
                backgroundImage:
                  'linear-gradient(-225deg, rgba(0,101,168,0.0) 0%, rgba(0,36,61,0.0) 50%), url("https://camo.githubusercontent.com/f746b614c6668e09bcc14a47a2435c4071f2c892/68747470733a2f2f692e696d6775722e636f6d2f46484f444249322e676966")',
              }}
            ></div>
            <div className='card-footer'>
              <span className='work-name'>IT logger</span>
              <span className='work-description'>
                Helps the Helpdesk support team so solve problems quickly.
              </span>
              <a
                href='https://admiring-albattani-bbb63f.netlify.app/'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                vist
              </a>
            </div>
          </div>
          <div className='card' style={{ margin: '70px auto' }}>
            <div
              className='card-image'
              style={{
                backgroundImage:
                  'linear-gradient(-225deg, rgba(0,101,168,0.0) 0%, rgba(0,36,61,0.0) 50%), url("https://camo.githubusercontent.com/9cf32540337501183d7e71c2cef531a25b2d3952/68747470733a2f2f692e696d6775722e636f6d2f736c6e477366392e676966")',
              }}
            ></div>
            <div className='card-footer'>
              <span className='work-name'>Contact Keeper</span>
              <span className='work-description'>Uploading Soon.</span>
              <a
                href='#.'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                vist
              </a>
            </div>
          </div>
          <div className='card' style={{ margin: '70px auto' }}>
            <div
              className='card-image-slice'
              style={{
                backgroundImage:
                  'linear-gradient(-225deg, rgba(0,101,168,0.0) 0%, rgba(0,36,61,0.0) 50%), url("https://camo.githubusercontent.com/58cd453889bb7b4def5c5e3a9c7f33c4c2bb5a40/68747470733a2f2f692e696d6775722e636f6d2f694665666d54412e676966")',
              }}
            ></div>
            <div className='card-footer'>
              <span className='work-name'>Github Finder</span>
              <span className='work-description'>Uploading soon.</span>
              <a
                href='!#'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                vist
              </a>
            </div>
          </div>
          <div className='card' style={{ margin: '70px auto' }}>
            <div
              className='card-image'
              style={{
                backgroundImage:
                  'linear-gradient(-225deg, rgba(0,101,168,0.0) 0%, rgba(0,36,61,0.0) 50%), url("https://thumbs.gfycat.com/FrailDecentAmericanbulldog-size_restricted.gif")',
              }}
            ></div>
            <div className='card-footer'>
              <span className='work-name'>Coming Soon</span>
              <span className='work-description'>coming soon.</span>
              <a
                href='!#'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                vist
              </a>
            </div>
          </div>
          <div className='card' style={{ margin: '70px auto' }}>
            <div
              className='card-image-slice'
              style={{
                backgroundImage:
                  'linear-gradient(-225deg, rgba(0,101,168,0.0) 0%, rgba(0,36,61,0.0) 50%), url("https://res.cloudinary.com/practicaldev/image/fetch/s--Xv3uCzgP--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://cdn.scotch.io/40410/CwQSGyJiQvevVCoiv3yQ_Number.gif")',
              }}
            ></div>
            <div className='card-footer'>
              <span className='work-name'>Facebook Messanger clone</span>
              <span className='work-description'>
                allows user to communicate in a group chat .
              </span>
              <a
                href='https://facebook-messenger-clone-24296.web.app/'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                vist
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
