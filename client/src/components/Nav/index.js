import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a className="navbar-brand" href="/">
        Google-React Book finder
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
