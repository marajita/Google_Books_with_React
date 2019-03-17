import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Google Book Search
      </a>

      <a className="navbar-brand" href="/savedbooks">
        Saved
      </a>

      <a className="navbar-brand" href="/">
        Search
      </a>
    </nav>
  );
}

export default Nav;
