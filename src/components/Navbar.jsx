import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/PRI-full-logo-png.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";


const Navbar = () => {

    const { t } = useTranslation();

  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [activeTab, setActiveTab] = useState("home");

  return (
    <Container>
      <img
        onClick={() => setActiveTab("home")}
        className="logo"
        src={logo}
        alt=""
      />

      <div className={toggle ? "blur active" : "blur"}></div>

      <ul
        onClick={handleToggle}
        className={toggle ? "nav-menu active" : "nav-menu"}
      >
        <Link to={"/"} className="link-styles">
          <li
            className={activeTab === "home" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("home")}
          >
            {t('home')}
          </li>
        </Link>
        <Link to={"/services"} className="link-styles">
        <li
          className={activeTab === "destinations" ? "activeTab" : "nonActive"}
          onClick={() => setActiveTab("destinations")}
        >
        {t('services')}
        </li>
        </Link>
        <Link to={"/aboutus"} className="link-styles">
          <li
            className={activeTab === "about-us" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("about-us")}
          >
          {t('About Us')}
          </li>
        </Link>

        <Link to={"/jobs"} className="link-styles">
          <li 
            className={activeTab ==="jobs" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("jobs")}
          >
              Jobs
          </li>
        
        </Link>

        <Link to={"/contactus"} className="link-styles">
          <li
            className={activeTab === "contact-us" ? "activeTab" : "nonActive"}
            onClick={() => setActiveTab("contact-us")}
          >
          {t('Contact Us')}
          </li>
        </Link>
      </ul>
      <div className="mobile-menu" onClick={handleToggle}>
        {toggle ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1% 8%;
  position: fixed;
  top: 0;
  height: 70px;
  width: 100%;
  z-index: 100;
  overflow-x: visible;
  transition: 0.2s;
  .logo {
    height: 40px;
  }
  .nav-menu {
    display: flex;
    gap: 37px;
    list-style: none;
    align-items: center;
  }
  .mobile-menu {
    position: absolute;
    right: 5%;
    font-size: 24px;
    cursor: pointer;
    transition: 0.3s;
    display: none;
    margin-top: 7px;
    color: #2b2b2b;
    :hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 1004px) {
    .blur {
      width: 100%;
      height: 230vh;
      backdrop-filter: blur(10px);
      position: absolute;
      left: -100%;
      z-index: 9;
    }
    .blur.active {
      left: -1em;
      width: 70%;
    }
    .nav-menu {
      background-color: white;
      width: 70%;
      height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 10%;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 1%;
      right: -100%;
      transition: 0.3s;
      z-index: 99;
      box-shadow: -10px 10px 18px #bfbfbf, 10px -10px 18px #ffffff;
    }
    .mobile-menu {
      display: block;
      z-index: 99;
    }
    .nav-menu.active {
      right: 1%;
    }
  }

  @media (max-width: 370px) {
    .nav-menu {
      width: 98%;
    }
  }
`;

export default Navbar;