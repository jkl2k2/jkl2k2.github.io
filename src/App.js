import './App.css';
import Nav from './Nav.js';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Nav />
        <div className="container-sm mt-5">
          <h1 className="text-dark text-left py-4 animate__animated animate__fadeInUp">
            <b>
              <span className="header">
                Hey, I&apos;m Josh! &#128075;
              </span>

              <p className="text-left">
                Cal State Monterey Bay class of '24
              </p>
            </b>
          </h1>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="container-sm mt-5">
            <h1 className="text-dark text-left py-4">
              <b>
                Let's create together.
              </b>
            </h1>
          </div>
        </div>

        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="container-sm mt-5">
            <h1 className="text-dark text-left py-4">
              <b>
                Feel free to visit my <a href="https://github.com/jkl2k2" className="link-underline-dark text-dark icon-link-hover" target="_blank" rel="noreferrer">GitHub Profile</a>
                &nbsp;or <a href="https://www.linkedin.com/in/joshua-lomelin/" className="link-underline-dark text-dark" target="_blank" rel="noreferrer">my LinkedIn</a>
              </b>
            </h1>
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
