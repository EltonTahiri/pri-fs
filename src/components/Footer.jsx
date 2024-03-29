import React from "react";
import styled from "styled-components";
import logo from "../assets/pri-fs-logo.png";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="" />
        <p>Where Hygiene Meets Happiness!</p>
      </div>
      <div className="columns">
        <div className="column"></div>
        <div className="column">
          <h3>{t("Contact Us")}</h3>
          <p>0041 62 874 10 00</p>
          <p>info@pri-fs.ch</p>
          <p>B.Jetullahu</p>
          <Link to="/data-protection" style={{ textDecoration: 'none' }}>
            <p id="Datenschutzerklärung">Datenschutzerklärung</p>
          </Link>

          <Link to="/impressum" style={{ textDecoration: 'none' }}>
            <p id="Impressum">Impressum</p>
          </Link>

        </div>
        <div className="column iconColumn">
          <a
            href="https://www.instagram.com/prifacility/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <AiFillInstagram className="icon" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61551476410117"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <BsFacebook className="icon" />
          </a>
          <a
            href="https://twitter.com/prifacility"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white" }}
          >
            <AiFillTwitterCircle className="icon" />
          </a>
          <SiGmail className="icon" />
        </div>
      </div>
      <p className="copyright">©Elton Tahiri All Rights Reserved</p>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  background: #252525;
  display: flex;
  justify-content: space-around;
  padding: 4em 4%;
  gap: 1em;
  color: white;
  .copyright {
    position: absolute;
    margin-top: 1em;
    z-index: 10;
  }
  .logo {
    img {
      display: flex;
      margin: auto;
      width: 130px;
    }
  }
  .columns {
    display: flex;
    gap: 3em;
    h3 {
      font-weight: 600;
      padding-bottom: 10px;
    }
    p {
      cursor: pointer;
      color: gray;
      :hover {
        color: white;
      }
    }
    .iconColumn {
      display: flex;
      flex-direction: column;
      gap: 20px;
      .icon {
        font-size: 24px;
        cursor: pointer;
        :hover {
          color: var(--primaryColor);
          transform: scale(1.1);
        }
      }
    }
  }
  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    gap: 4em;
  }
  @media (max-width: 597px) {
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .columns {
      flex-direction: column;
      text-align: center;
      .iconColumn {
        flex-direction: row;
      }
    }
  }
  #Datenschutzerklärung {
    color: white;
  }
  #Impressum {
    color: white;
  }
`;

export default Footer;
