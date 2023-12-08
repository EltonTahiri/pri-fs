import React from "react";
import styled from "styled-components";
import bannerImg from "../assets/homePageAssets/bannerImg.png";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./LanguageSelector";
import gmp from "../assets/gmp.png"

const Banner = () => {

  const { t } = useTranslation();
  
  return (
    <Container>
      <div className="leftSide">
      <h1>{t('bannerTitle')}</h1>
        <p>{t('bannerDescription')}</p>
        {/* <img  src={gmp} alt="" className="gmp"/> */}
        <LanguageSelector />
      </div>
      <img className="bannerImg" src={bannerImg} alt="" />
    </Container>
  );
};
const Container = styled.div` 
  padding: 0 7%;
  padding-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--backgroundGradient4);
  gap: 2em;
  .gmp{
    height: 100px;
  }
  .leftSide {
    h1 {
      font-size: 3em;
      font-weight: 600;
      background: var(--gradientBackground2);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    p {
      color: gray;
      margin-top: 10px;
    }
    button {
      padding: 10px 14px;
      font-family: "Poppins", sans-serif;
      font-size: 15px;
      border: none;
      background: #333333;
      color: white;
      border-radius: 7px;
      margin-top: 1em;
      :hover {
        background: var(--primaryColorDark);
        transition: 0.3s;
        cursor: pointer;
      }
    }
  }
  .bannerImg {
    width: 42%;
    max-width: 700px;
  }
  @media (min-width: 1440px) {
    margin-top: 10em;
  }
  @media (max-width: 1048px) {
    margin-top: 7em;
    gap: 1em;
  }
  @media (max-width: 980px) {
    .leftSide {
      h1 {
        font-size: 2.7em;
      }
    }
  }
  @media (max-width: 880px) {
    .leftSide {
      h1 {
        font-size: 2.4em;
      }
    }
  }
  @media (max-width: 788px) {
    .leftSide {
      h1 {
        font-size: 2.4em;
      }
    }
  }
  @media (max-width: 740px) {
    .leftSide {
      h1 {
        font-size: 2.2em;
      }
    }
  }
  @media (max-width: 710px) {
    flex-direction: column;
    padding: 4em 2%;
    margin-top: 3em;
    gap: 3em;
    .leftSide {
      width: 100%;
      text-align: center;
      h1 {
        font-size: 2.2em;
      }
      div {
        margin-left: 20%;
      }
    }
    .bannerImg {
      width: 70%;
    }
  }
  @media (max-width: 655px) {
    .leftSide {
      h1 {
        font-size: 1.8em;
      }
      div {
        margin-left: 14%;
      }
    }
  }
  @media (max-width: 555px) {
    .leftSide {
      div {
        input {
          width: 100%;
        }
        margin-left: 0;
      }
    }
  }
`;

export default Banner;
