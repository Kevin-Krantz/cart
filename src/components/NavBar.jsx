import React from "react";

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand h1">
          Navbar
          <span className="badge rounded-pill bg-secondary ms-2">
            {props.productCount}
          </span>
        </span>
      </div>
    </nav>
  );
}

export default NavBar;
