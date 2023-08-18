import React from "react";
import styled from "styled-components";
import logo from "../assets/pri-fs-logo.png";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="" />
        <p>Where Hygiene Meets Happiness!</p>
      </div>
      <div className="columns">
        <div className="column">
          <h3>Links</h3>
          <p>Home</p>
          <p>Services</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="column">
          <h3>Support</h3>
          <p>Contact</p>
          <p>Support Center</p>
          <p>Feedback</p>
        </div>
        <div className="column">
          <h3>Contact</h3>
          <p>+383 12 123 123</p>
          <p>pri-fs@gmail.com</p>
          <p>Elton Tahiri</p>
        </div>
        <div className="column iconColumn">
          <AiFillInstagram className="icon" />
          <BsFacebook className="icon" />
          <AiFillTwitterCircle className="icon" />
          <SiGmail className="icon" />
        </div>
      </div>
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
  .logo {
    img {
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
`;

export default Footer;
