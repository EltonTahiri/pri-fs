import React from "react";
import styled from "styled-components";
import logo from "../assets/PRI-full-logo-png.png";
import { useTranslation } from "react-i18next";


const AboutUs = () => {

    const { t } =useTranslation();

  return (
    <Container>
      <img src={logo} alt="" />
      <div className="items">
        <div className="item">
          <h2>{t('h2Introduction')}</h2>
          <p>{t('pIntro')}</p>
        </div>
        <div className="item">
          <h2>{t('h2Story')}</h2>
          <p>{t('pStory')}</p>
        </div>
        <div className="item">
          <h2>{t('h2Team')}</h2>
          <p>{t('pTeam')}</p>
        </div>
        <div className="item">
          <h2>{t('h2Quality')}</h2>
          <p>{t('pQuality')} </p>
        </div>
        <div className="item">
          <h2>{t('h2ClientApproach')}</h2>
          <p>{t('pCCP')}</p>
        </div>
        <div className="item">
          <h2>{t('h2Sustain')}</h2>
          <p>{t('pSustain')} </p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  img {
    width: 50%;
    margin: auto;
    display: flex;
  }
  .items {
    margin-top: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4em;
    text-align: center;
    padding: 0 10%;
    .item {
      h2 {
        margin-bottom: 10px;
        color: var(--primaryColor);
        font-weight: 500;
      }
      p {
        color: gray;
      }
    }
  }
`;

export default AboutUs;