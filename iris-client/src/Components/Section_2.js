import React from "react";

function Landing2Text() {
  return (
    <>
      <p
        className="p_4"
        style={{ fontSize: "calc(1em + 3vw)", fontWeight: "bold" }}
      >
        Iris has a native token called{" "}
        <span style={{ color: "hsl(213, 70%, 40%)", fontWeight: 900 }}>
          OMEN
        </span>
        .
      </p>
      <br />
      <p
        className="p_5"
        style={{ lineHeight: 1.5, fontSize: " calc(1em + .35vw)" }}
      >
        You can earn tokens by interacting with the DApp or earn token instantly
        by creating, sharing, and commenting to posts.
      </p>
    </>
  );
}

export default Landing2Text;
