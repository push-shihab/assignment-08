import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Products</a>
      </li>
      <li>
        <a>My Profile</a>
      </li>
    </>
  );
  return (
    <nav className="bg-[#0f172a]">
      <div className="container mx-auto">
        <div className="navbar text-white">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[#38bdf8]"
              >
                {links}
              </ul>
            </div>
            <a className="font-extrabold text-4xl cursor-pointer">
              <span className="text-[#38bdf8]">Sun</span>
              <span className="text-white">Cart</span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end gap-2">
            <a className="btn btn-outline border-[#38bdf8] text-[#38bdf8]">
              Login
            </a>
            <a className="btn text-white border-none shadow-none bg-[#2563eb]">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
