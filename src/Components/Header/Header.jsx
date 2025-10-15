import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../Container/Container";

const Header = () => {
  const navLinks = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/login", name: "Login" },
    { id: 3, path: "/register", name: "Register" },
  ];

  return (
    <header>
      <Container>
        <div className="navbar px-0 py-6">
          {/* Dropdown Menu & Logo */}
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
                className="menu menu-sm dropdown-content gap-10 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {navLinks.map(({ id, path, name }) => (
                  <li key={id}>
                    <NavLink to={path} className={"p-0 text-base font-semibold rounded-none hover:bg-transparent hover:text-blue-600"}>{name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <Link to={"/"} className="text-2xl font-bold">daisyUI</Link>
          </div>

          {/* Nav Menu */}
          <nav className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-10">
              {navLinks.map(({ id, path, name }) => (
                <li key={id}>
                  <NavLink to={path} className={"p-0 text-base font-semibold rounded-none hover:bg-transparent hover:text-blue-600"}>{name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Button */}
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
