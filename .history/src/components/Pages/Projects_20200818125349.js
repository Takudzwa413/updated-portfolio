import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import './Project.css';
// import ScriptTag from 'react-script-tag';

const Projects = () => {
  return (
    <Fragment>
      {/* <ScriptTag type="text/javascript" src="/path/to/resource.js" /> */}

      <div className='work w3-center w3-animate-fading' id='page-transition'>
        <div className='cards-container'>
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
                Helps the Helpdesk support team to solve problems quickly.
              </span>
              <a
                href='https://admiring-albattani-bbb63f.netlify.app/'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                visit
              </a>
            </div>
          </div>
          <div className='card' style={{ margin: '70px auto' }}>
            <div
              className='card-image'
              style={{
                backgroundImage:
                  'linear-gradient(-225deg, rgba(0,101,168,0.0) 0%, rgba(0,36,61,0.0) 50%), url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTDleKYbAiJWSmw5BDXXkQVv5tfbO4Xb1FZPw&usqp=CAU")',
              }}
            ></div>
            <div className='card-footer'>
              <span className='work-name'>E-commerce shop</span>
              <span className='work-description'>
                Allows the user to shop at the website.Built using React
              </span>
              <a
                href='https://portfolio-725c7.web.app/'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                visit
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
              <span className='work-description'>
                Allows the user to search for any public github accounts .
              </span>
              <a
                href='https://kind-ride-3cc220.netlify.app/'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                visit
              </a>
            </div>
          </div>
          <div className='card' style={{ margin: '70px auto' }}>
            <div
              className='card-image-slice'
              style={{
                backgroundImage:
                  'linear-gradient(-225deg, rgba(0,101,168,0.0) 0%, rgba(0,36,61,0.0) 50%), url("data:image/jpeg;base64,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")',
              }}
            ></div>
            <div className='card-footer'>
              <span className='work-name'>Github Finder</span>
              <span className='work-description'>
                Allows the user to search for any public github accounts .
              </span>
              <a
                href='https://kind-ride-3cc220.netlify.app/'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                visit
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
              <span className='work-description'>
                Allows the user to search for any public github accounts .
              </span>
              <a
                href='https://kind-ride-3cc220.netlify.app/'
                className='btn-learn-more'
                target='_blank'
                rel='noopener noreferrer'
              >
                visit
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
