import React from 'react';
import { Link } from 'react-router-dom';
import Landing_1 from '../Components/Landing_1';
import Landing_2 from '../Components/Landing_2';
import Landing_3 from '../Components/Landing_3';

function LandingPage() {
  // const redirect = e => {
  //   e.preventDefault();
  //   window.location.pathname = '/articles';
  // };

  return (
    <>
      <div className="landing_1">
        <div className="landing_1_text">
          <Landing_1 />
        </div>
        <div className="landing_1_img"></div>
      </div>
      <div className="landing_2">
        <div className="landing_2_text">
          <Landing_2 />
        </div>
        <div className="landing_2_2_img"></div>
        <div className="landing_2_img"></div>
      </div>
      <div className="landing_4">
        <div className="landing_4_text">
          <p className="p_4">Wanna start using the DApp?</p>
        </div>
        <button
          // onClick={e => redirect(e)}
          className="landing_4_button"
        >
          <Link to="/articles">
            <span style={{ color: 'white' }}> Click Here!</span>
          </Link>
        </button>
      </div>
      <div className="landing_3">
        <Landing_3 />
      </div>
    </>
  );
}

export default LandingPage;
