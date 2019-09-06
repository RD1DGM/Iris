import React from 'react';
// import { Button } from '@material-ui/core';
import { useWeb3 } from '../utils/Web3Helper';
import { Link } from 'react-router-dom';
import '../styles/global.css';

function StartPost() {
  const w3 = useWeb3();
  const { status, enable } = w3;

  const StartPost = () => {
    if (status === 'LOCKED') {
      return (
        <button className="button" onClick={() => enable()}>
          Click here to log-in
        </button>
      );
    }
    if (status === 'NOT_ENABLED') {
      return (
        <button className="button" onClick={() => enable()}>
          Please Connect the MetaMask to DApp
        </button>
      );
    } else {
      return (
        <Link to="/articleform">
          <button className="button"> Start posting here </button>
        </Link>
      );
    }
  };

  return <StartPost />;
}

export default StartPost;
