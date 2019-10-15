import React from 'react';
import { Link } from 'react-router-dom';
import Landing_1 from '../components/Section_1';
import Landing_2 from '../components/Section_2';
import Landing_3 from '../components/Section_3';
import '../styles/landing_1.css';
import Navbar from '../components/Navbar';

function LandingPage() {
  return (
    <>
      <Navbar />
      <div id="landing_1" className="landing_1">
        <div className="landing_1_text">
          <Landing_1 />
        </div>
        <div className="landing_1_img"></div>
      </div>
      <div id="landing_2" className="landing_2">
        <div className="landing_2_text">
          <Landing_2 />
        </div>
        <div className="landing_2_2_img"></div>
        <div className="landing_2_img"></div>
      </div>
      <div className="landing_4">
        <div className="landing_4_text">
          <p className="p_4" style={{ fontSize: '2.5em', fontWeight: 'bold' }}>
            Wanna start using the DApp?
          </p>
        </div>
        <button className="landing_4_button">
          <Link to="/articles">
            <span style={{ color: 'white', fontSize: '4rem' }}> Click Here!</span>
          </Link>
        </button>
      </div>
      <div id="landing_3" className="landing_3">
        <Landing_3 />
      </div>
    </>
  );
}

export default LandingPage;
