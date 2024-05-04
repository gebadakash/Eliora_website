import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "../assets/elioralogo.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

const navLinks = [
  { title: "Home", to: "/" },
  { title: "About", to: "about" },
  {
    title: "Staffing",
    to: "staffing",
    dropdownItems: [
      { title: "Placement and Recruitment", to: "placement" },
      { title: "Contract to Contract Staffing", to: "contract" },
    ],
  },
  {
    title: "Services",
    to: "services",
    dropdownItems: [
      { title: "Web Designing", to: "websitedesign" },
      { title: "Web Development", to: "webDevelopment" },
      { title: "Wordpress Development", to: "wordpressdevelopment" },
      { title: "App Development", to: "appdevelopment" },
      { title: "E-Commerce Development", to: "ecommercedevelopment" },
      { title: "Graphics & Logo", to: "graphicsandlogo" },
      {
        title: "Digital Marketing & Content Marketing",
        to: "digitalandcontentmarketing",
      },
      { title: "UI/UX Designing", to: "uiuxdesign" },
    ],
  },
  { title: "Clients", to: "clients" },
  { title: "Career", to: "career" },
  { title: "Gallery", to: "gallery" },
  { title: "Portfolio", to: "ourportfolio" },
  { title: "Blog", to: "blog" },
  {
    title: "Pay Now",
    href: "https://smartpay.easebuzz.in/105013/272c482ba44a424ba6a062faaaab6116",
    target: "_blank",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);

  const handleNavbarToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    const closeDropdown = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0"
      ref={navbarRef}
    >
      <a href="index" className="navbar-brand p-0">
        <img
          className="img-fluid float-right"
          src={Logo}
          width="150px"
          alt="logo"
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleNavbarToggle}
      >
        <FaBars style={{ borderRadius: "0", boxShadow: "none" }} />
      </button>
      <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")}>
        <div className="navbar-nav ms-auto py-0">
          {navLinks.map((navItem, index) => (
            <React.Fragment key={index}>
              {navItem.dropdownItems ? (
                <div className="nav-item dropdown">
                  <NavLink
                    to={navItem.to}
                    className="nav-link dropdown-toggle"
                    role="button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleDropdownToggle(index);
                    }}
                  >
                    {navItem.title}
                  </NavLink>
                  <div
                    className={"dropdown-menu" + (activeDropdown === index ? " show" : "")}
                  >
                    {navItem.dropdownItems.map((dropdownItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={dropdownItem.to}
                        onClick={() => setIsOpen(false)}
                        className="dropdown-item"
                      >
                        {dropdownItem.title}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : navItem.href ? (
                <a
                  href={navItem.href}
                  target={navItem.target}
                  className="nav-item nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {navItem.title}
                </a>
              ) : (
                <NavLink
                  exact
                  to={navItem.to}
                  className="nav-item nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {navItem.title}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
        <NavLink
          to="/contactus"
          className="btn btn-danger py-2 px-4 ms-3"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
