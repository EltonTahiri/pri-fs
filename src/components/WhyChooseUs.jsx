import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import video from '../assets/frontvideo.mp4';

const WhyChooseUs = () => {

  const {t} = useTranslation();

  return (
    <Container>
        <div className="video">
        <video autoPlay loop muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      <h2 className="title">{t('whyChoose')}</h2>
      <div className="items">
        <div className="item">
          <img
            src="https://icon-library.com/images/experience-icon-png/experience-icon-png-12.jpg"
            alt=""
          />
          <h3>{t('h3Years')}</h3>
          <p>{t('pYears')}</p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6334/6334914.png"
            alt=""
          />
          <h3>{t('h3Trained')}</h3>
          <p>{t('pTrained')}</p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1021/1021106.png"
            alt=""
          />
          <h3>{t('h3Excellence')}</h3>
          <p>{t('pExcellence')}</p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6717/6717823.png"
            alt=""
          />
          <h3>{t('h3Detail')}</h3>
          <p>{t('pDetail')}</p>
        </div>
        <div className="item">
          <img
            src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/14-512.png"
            alt=""
          />
          <h3>{t('h3Satisfaction')}</h3>
          <p>{t('pSatisfaction')}</p>
        </div>
        <div className="item">
          <img
            src="https://www.pngkit.com/png/full/207-2073867_schedule-credit-icon.png"
            alt=""
          />
          <h3>{t('h3Flexibile')}</h3>
          <p>{t('pFlexibile')} </p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10334/10334115.png"
            alt=""
          />
          <h3>{t('h3Reliable')}</h3>
          <p> {t('pReliable')}</p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1312/1312604.png"
            alt=""
          />
          <h3>{t('h3Positive')}</h3>
          <p>{t('pReviews')} </p>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 7em 4%;
  .title {
    margin: 3em 0 1em 0;
    font-weight: 600;
    text-align: center;
  }
  .video{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  video{
    width: 25%;
    height: 25%;
    object-fit: cover;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3em 1em;
    .item {
      width: 370px;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 10px;
      cursor: pointer;
      transition: 0.3s;
      img {
        width: 70px;
      }
      h3 {
        font-weight: 500;
      }
      p {
        color: var(--fontSecondaryColor);
        font-weight: 300;
      }
      :hover {
        box-shadow: 0 0 12px 2px #c9c9c9;
      }
    }
  }
  @media (max-width: 768px) {
    .video {
      video {
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export default WhyChooseUs;
