import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faTwitter,
  faYoutube,
  faInstagram,
  faMedium,
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

function Landing3Text() {
  return (
    <>
      <div className="footer_logo"></div>
      <div className="footer_mail">
        <p className="p_5">Subscribe to our mailing list</p>
        <input className="footer_input" type="search" name="search" placeholder="Enter Email..." />
        <input className="footer_button" type="button" value="Subscribe" />
      </div>
      <div className="footer_links">
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ height: 50, width: 50, color: '#a43bd2', margin: '0 1.2rem' }}
          />
          <FontAwesomeIcon icon={faInstagram} style={{ height: 50, width: 50, color: '#a43bd2', margin: '0 1.2rem' }} />
          <FontAwesomeIcon icon={faYoutube} style={{ height: 50, width: 50, color: '#a43bd2', margin: '0 1.2rem' }} />
          <FontAwesomeIcon icon={faTwitter} style={{ height: 50, width: 50, color: '#a43bd2', margin: '0 1.2rem' }} />
          <FontAwesomeIcon icon={faMedium} style={{ height: 50, width: 50, color: '#a43bd2', margin: '0 1.2rem' }} />
          <FontAwesomeIcon icon={faLinkedin} style={{ height: 50, width: 50, color: '#a43bd2', margin: '0 1.2rem' }} />
          <FontAwesomeIcon icon={faGithub} style={{ height: 50, width: 50, color: '#a43bd2', margin: '0 1.2rem' }} />
        </a>
      </div>
      <div className="footer_closing">
        <p> © 2019 Iris, Powered By Ethereum Blockchain </p>
      </div>
    </>
  );
}

export default Landing3Text;
