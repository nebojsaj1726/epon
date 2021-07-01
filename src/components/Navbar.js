import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-info mb-5">
        <Link to="/" className="navbar-brand">
          Eponuda Task
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
