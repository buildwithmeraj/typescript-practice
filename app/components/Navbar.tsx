import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start"></div>
      <div className="navbar-center">
        <a className="text-xl flex items-center gap-2 font-bold">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg"
            alt="TypeScript Logo"
            className="w-10 h-10 rounded-xl"
          />
          TypeScript
        </a>
      </div>
      <div className="navbar-end"></div>
    </div>
  );
};

export default Navbar;
