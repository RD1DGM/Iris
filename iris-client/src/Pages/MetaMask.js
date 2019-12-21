import React from "react";
import MetaMaskLogo from "../assets/metamask.svg";

function MetaMask() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: '0 4em'
      }}
    >
      <img
        src={MetaMaskLogo}
        alt="MetMaskLogo"
        height="300"
        width="300"
        style={{ margin: "auto 0", justifySelf: "right" }}
      />
      <p
        style={{
          margin: "auto 0",
          justifySelf: "left",
          fontSize: "2.5em",
          color: "rgb(158,158,158)",
          width: '75%'
        }}
      >
        Please install{" "}
        <a href="https://metamask.io/" target="_blank" style={{ color: "orange", fontWeight:'bold' }}>
          MetaMask
        </a>{" "}
        to start using this application.
      </p>
    </div>
  );
}

export default MetaMask;
