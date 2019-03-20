import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        height: 205,
        clear: "both",
        paddingTop: 75,
        textAlign: "center"
      }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
