import React, { Fragment } from 'react';
// import { Link } from 'react-router-dom';
import './Project.css';
// import ScriptTag from 'react-script-tag';

const Projects = () => {
  return (
    <Fragment>
      {/* <ScriptTag type="text/javascript" src="/path/to/resource.js" /> */}
      <div id='page-transition'></div>

      <div className='work'>
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
        </div>
      </div>
    </Fragment>
  );
};

export default Projects;
