import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Navbar } from "flowbite-react";

const Navigation = () => {
  return (
    <nav className="flex justify-center">
      <Navbar
        fluid={true}
        rounded={false}
        className="sticky top-0 shadow-md bg-white w-full flex justify-center "
      >
        <Navbar.Toggle className="hover:text-blue-500 md:hover:text-blue-500" />

        <Navbar.Collapse>
          <Navbar.Link className="hover:text-blue-500 md:hover:text-blue-500">
            <Link to="/manager">Manager</Link>
          </Navbar.Link>

          <Navbar.Link className="hover:text-blue-500 md:hover:text-blue-500">
            <Link to="/model">Model</Link>
          </Navbar.Link>

          <Navbar.Link className="hover:text-blue-500 md:hover:text-blue-500">
            <Link to="/login">Login</Link>
          </Navbar.Link>
          <Navbar.Link className="hover:text-blue-500 md:hover:text-blue-500">
            <Link to="/logout">Logout</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default Navigation;
