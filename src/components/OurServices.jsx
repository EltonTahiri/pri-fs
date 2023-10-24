import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import background from "../assets/backgroundpri.jpeg";
import picture from "../assets/picture.jpeg"

const OurServices = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <h2 className="title">{t('ourServices')}</h2>
      <div className="items">
        <div className="item">
          <h1>01</h1>
          <h3>{t('h3Residential')}</h3>
          <p>{t('pResidential')}</p>
        </div>
        <div className="item">
          <h1>02</h1>
          <h3>{t('h3Commercial')}</h3>
          <p>{t('pCommercial')}</p>
        </div>
        <div className="item">
          <h1>03</h1>
          <h3>{t('h3DeepCleaning')}</h3>
          <p>{t('pDeepCleaning')}</p>
        </div>
        <div className="item">
          <h1>04</h1>
          <h3>{t('h3Movein')}</h3>
          <p>{t('pMovein')}</p>
        </div>
        <div className="item">
          <h1>05</h1>
          <h3>{t('h3Eco')}</h3>
          <p>{t('pEco')}</p>
        </div>
        <div className="item">
          <h1>06</h1>
          <h3>{t('h3Special')}</h3>
          <p>{t('pSpecial')}</p>
        </div>
        <div className="item">
          <h1>07</h1>
          <h3>{t('h3Post')}</h3>
          <p>{t('pPost')}</p>
        </div>
        <div className="item">
          <h1>08</h1>
          <h3>{t('h3Affordable')}</h3>
          <p>{t('pAffordable')}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 5em 4%;
  padding-top: 0em;
  position: relative;
  overflow: hidden;
  
  .title {
    margin: 3em 0 3em 0;
    font-weight: 600;
    text-align: center;
    padding: 20px; /* Add some padding to the title */
    position: relative; /* Ensure the title is above the background */
    z-index: 2; /* Set a higher z-index for the title */
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3em;
    position: relative;
    z-index: 1;
    .item {
      position: relative;
      width: 340px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: 0 0 12px 3px #d6d6d6;
      padding: 20px;
      cursor: pointer;
      transition: 0.4s;
      background: white; /* Set the white background */
      :hover {
        background: var(--primaryColor);
        h1 {
          color: white;
          top: 10px;
        }
        h3 {
          color: white;
          margin-top: 3.7em;
        }
        p {
          color: #d6d6d6;
        }
      }
      h1 {
        position: absolute;
        color: #8080801a;
        align-self: self-start;
        margin-bottom: 10px;
        font-size: 4em;
        top: 13%;
        left: 1em;
        transition: 0.4s;
      }
      h3 {
        transition: 0.4s;
        color: var(--primaryColor);
        margin-top: 3em;
        margin-bottom: 10px;
        font-weight: 600;
      }
      p {
        transition: 0.4s;
        color: gray;
        font-weight: 300;
      }
    }
  }

  &::before {
    content: "";
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(5px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  @media (max-width: 768px) {
  &::before {
    background-image: none; /* Remove background image for mobile */
  }
}

`;

export default OurServices;
