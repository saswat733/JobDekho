import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Find Jobs",
      path: "/jobs",
    },
    {
      title: "Companies",
      path: "/companies",
    },
  ];

  const activeStyle = "text-green-700 pb-4 border-b-2 border-green-700";

  return (
    <div className="border-b w-full fixed top-0 left-0 md:h-16 font-Nunito z-50">
    
        <div className="w-full fixed z-10 flex justify-between  bg-white">
          <div className="w-full md:w-fit  bg-white p-2 flex justify-between items-center">
            <h1 className="text-3xl font-bold">Logo</h1>
            <div>
              <FontAwesomeIcon
                icon={open ? faTimes : faBars}
                style={{ color: "#3fb337", cursor: "pointer" }}
                onClick={toggleMenu}
                className="w-8 h-8 font-bold block md:hidden "
              />
            </div>
          </div>
          <div
            className={`text-black  md:w-fit flex flex-col md:flex-row text-left bg-white transition-all w-full pt-4 absolute md:relative duration-1000 ${
              open ? "top-20" : "top-[-490px]"
            } md:top-0`}
          >
            {navLinks.map((ele, key) => (
              <div key={key} className="w-fit text-center  p-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? activeStyle
                      : "text-gray-500 hover:text-green-700"
                  }
                  to={ele.path}
                >
                  {ele.title}
                </NavLink>
              </div>
            ))}
            <div className="m-4">
              <div className=" lg:flex ">
                <Link to="/login">
                  <button className="border border-gray-300 text-black font-bold py-1.5 px-5 rounded-md lg:ml-32 lg:ml-7 lg:shadow xl:ml-36 hover:bg-green-300 hover:border-green-500 duration-500 mr-5 lg:hover:scale-105">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="bg-black text-white font-bold py-1.5 px-5 rounded-md lg:ml hover:bg-green-700 duration-500 lg:hover:scale-105 lg:shadow">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
