import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-orange-950">
        <div className="flex-1">
          <a className="btn btn-ghost text-white normal-case text-xl">
            daisyUI
          </a>
        </div>
        <div className="flex-none">
          <Link to={"/"} className="btn ml-5">
            All user
          </Link>
          <Link to={"/filtered"} className="btn ml-5">
            Filterd
          </Link>
          <Link to={"/top-cities"} className="btn ml-5">
            top Cities
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
