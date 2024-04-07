import React, { useEffect, useState } from "react";
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
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const handleMouseEnter = (index) => {
    const dropdown = document.getElementById(`dropdown-${index}`);
    dropdown.classList.add("show");
  };

  const handleMouseLeave = (index) => {
    const dropdown = document.getElementById(`dropdown-${index}`);
    dropdown.classList.remove("show");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${
        sticky ? "dark-nav" : " "
      }`}
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
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <FaBars />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0">
          {navLinks.map((navItem, index) => (
            <React.Fragment key={index}>
              {navItem.dropdownItems ? (
                <div
                  className="nav-item dropdown"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <NavLink
                    to={navItem.to}
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {navItem.title}
                  </NavLink>
                  <div
                    id={`dropdown-${index}`}
                    className="dropdown-menu m-0"
                    aria-labelledby="navbarDropdown"
                  >
                    {navItem.dropdownItems.map((dropdownItem, subIndex) => (
                      <NavLink
                        key={subIndex}
                        to={dropdownItem.to}
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
                >
                  {navItem.title}
                </a>
              ) : (
                <NavLink exact to={navItem.to} className="nav-item nav-link">
                  {navItem.title}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </div>
        <a href="contact" className="btn btn-danger py-2 px-4 ms-3">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
