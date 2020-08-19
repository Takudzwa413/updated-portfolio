import React, { Fragment } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/Pages/About';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import Testimonials from './components/Pages/Testimonials';
import Projects from './components/Pages/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Skills from './components/Pages/Skills';
import './App.css';
import './components/Navbar/Nav';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar />;
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/projects' component={Projects} />
            {/* <Route exact path='/skills' component={Skills} /> */}
            <Route exact path='/testimonials' component={Testimonials} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
