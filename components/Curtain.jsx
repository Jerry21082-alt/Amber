import React from "react";

const Curtain = () => {
  return (
    <div
      className="curtain"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        zIndex: "1",
      }}
    ></div>
  );
};

export default Curtain;
