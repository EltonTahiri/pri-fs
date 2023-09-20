import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Services = () => {

  const {t} = useTranslation();

  return (
    <Container>
      <h1 className="title">{t('ourServices')}</h1>
      <div className="items">
        <div className="item">
          <h1>01</h1>
          <h2>{t('h3Residential')}</h2>
          <p>{t('pResidential')}</p>
        </div>
        <div className="item">
          <h1>02</h1>
          <h2>{t('h3Commercial')}</h2>
          <p>{t('pCommercial')}</p>
        </div>
        <div className="item">
          <h1>03</h1>
          <h2>{t('h3DeepCleaning')}</h2>
          <p>{t('pDeepCleaning')}</p>
        </div>
        <div className="item">
          <h1>04</h1>
          <h2>{t('h3Movein')}</h2>
          <p>{t('pMovein')}</p>
        </div>
        <div className="item">
          <h1>05</h1>
          <h2>{t('h3Eco')}</h2>
          <p>{t('pEco')}</p>
        </div>
        <div className="item">
          <h1>06</h1>
          <h2>{t('h3Special')}</h2>
          <p>{t('pSpecial')}</p>
        </div>
        <div className="item">
          <h1>07</h1>
          <h2>{t('h3Post')}</h2>
          <p>{t('pPost')}</p>
        </div>
        <div className="item">
          <h1>08</h1>
          <h2>{t('h3Affordable')}</h2>
          <p>{t('pAffordable')}</p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 1em 4%;
  .title {
    margin: 3em 0 1em 0;
    text-align: center;
    font-weight: 600;
    background: var(--gradientBackground2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3em;
    .item {
      position: relative;
      width: 340px;
      height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-shadow: 0 0 12px 3px #d6d6d6;
      padding: 15px;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        background: var(--primaryColor);
        h1 {
          color: white;
          top: 10px;
        }
        h2 {
          color: white;
          margin-top: 3.4em;
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
      h2 {
        transition: 0.4s;
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
`;

export default Services;