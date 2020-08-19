import React, { Fragment } from 'react';
import './About.css';

const About = () => {
  return (
    <Fragment>
      <div className='resume-wrapper animate__rollIn '>
        {/* <div className='myimage'>
          <img
            alt='logo'
            src='https://media-exp1.licdn.com/dms/image/C4E03AQGQmZZZi0TqvA/profile-displayphoto-shrink_400_400/0?e=1603324800&v=beta&t=2C2ZzWfbNt5TzSBeyNvoAL5PhQSw-NJ6M_anLTtJ_qs'
          />
        </div> */}
        <section className='experience section-padding'>
          <div className='container'>
            <h3 className='experience-title'>Education</h3>
            <div className='experience-wrapper'>
              <div className='company-wrapper clearfix'>
                <div className='experience-title'>Life Choice Academy</div>{' '}
                {/* NAME OF THE COMPANY I WORK WITH  */}
                <div className='time'>Feb 2020 - Present</div>{' '}
                {/* THE TIME YOU WORK WITH THE COMPANY  */}
              </div>
              <div className='job-wrapper clearfix'>
                <div className='experience-title'>Coding BootCamp </div>{' '}
                {/* JOB TITLE  */}
                <div className='company-description'>
                  <p>
                    Python || JavaScript || React || MySQL || Html || CSS ||
                    Bootstrap
                  </p>{' '}
                  {/* JOB DESCRIPTION  */}
                </div>
              </div>
              <div className='company-wrapper clearfix'>
                <div className='experience-title'>DamelinCollege</div>{' '}
                {/* NAME OF THE COMPANY YOUWORK WITH  */}
                <div className='time'>January 2019 - December 2019</div>{' '}
                {/* THE TIME YOU WORK WITH THE COMPANY  */}
              </div>
              <div className='job-wrapper clearfix'>
                <div className='experience-title'>
                  PC Engineering and Server Management
                </div>{' '}
                {/* JOB TITLE  */}
                <div className='company-description'>
                  <p>
                    Configuring Windows server 2016 || Install and Configure
                    Windows Servers || Provide Technical Support and Guidance ||
                    Perform System Maintenance Monitor System Performance
                  </p>{' '}
                  {/* JOB DESCRIPTION  */}
                </div>
              </div>
            </div>
            {/*Skill experience*/}
            <div className='section-wrapper clearfix'>
              <h3 className='section-title'>Skills</h3>{' '}
              {/* YOUR SET OF SKILLS  */}
              <ul>
                <li className='skill-percentage1'>Python</li>
                <li className='skill-percentage1'>React JS</li>
                <li className='skill-percentage1'>Javascript</li>
                <li className='skill-percentage1'>MySQL</li>
                <li className='skill-percentage1'>HTML / HTML5</li>
                <li className='skill-percentage1'>CSS/ CSS3</li>
              </ul>
            </div>
            <div className='section-wrapper clearfix'>
              <h3 className='section-title'>Hobbies</h3>{' '}
              {/* DESCRIPTION OF YOUR HOBBIES */}
              <p>Gaming</p>
              <p>Coding</p>
              <p>Photography</p>
            </div>
          </div>
        </section>
        <div className='clearfix' />
      </div>
    </Fragment>
  );
};

export default About;
