import React from "react";
import styled from "styled-components";
import logo from "../assets/PRI-full-logo-png.png";

const AboutUs = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <div className="items">
        <div className="item">
          <h2>Introduction</h2>
          <p>
            Welcome to PRI Facility Services, where cleaning goes beyond
            surfaces to create environments that radiate freshness and comfort.
            We're thrilled that you're considering us for your cleaning needs.
          </p>
        </div>
        <div className="item">
          <h2>Our Story</h2>
          <p>
            Our journey began with a simple idea - to transform spaces into
            havens of cleanliness and tranquility. Inspired by our passion for
            hygiene and order, we, at PRI Facility Services, embarked on a
            mission to redefine the cleaning industry.
          </p>
        </div>
        <div className="item">
          <h2>Team Introduction</h2>
          <p>
            Meet the faces behind the sparkle at PRI Facility Services! Our
            dedicated team is a diverse blend of experienced cleaning
            professionals who share a common goal: to turn cleaning into an art
            form. From our meticulous cleaners to our attentive customer service
            team, everyone at PRI Facility Services is committed to excellence.
          </p>
        </div>
        <div className="item">
          <h2>Commitment to Quality</h2>
          <p>
            At PRI Facility Services, we believe that quality isn't a luxury;
            it's a necessity. Every task we undertake is a reflection of our
            unwavering commitment to deliver exceptional results. We maintain
            this standard through continuous training, meticulous supervision,
            and an eye for detail that sets us apart.
          </p>
        </div>
        <div className="item">
          <h2>Client-Centric Approach</h2>
          <p>
            Your satisfaction is at the heart of everything we do at PRI
            Facility Services. We listen to your needs, understand your
            preferences, and tailor our cleaning plans accordingly. Your space
            isn't just a job to us; it's a canvas where we create cleanliness,
            comfort, and joy.
          </p>
        </div>
        <div className="item">
          <h2>Sustainability and Eco-Friendliness</h2>
          <p>
            As stewards of the environment, we take pride in our eco-friendly
            practices at PRI Facility Services. Our choice of cleaning products
            reflects our commitment to both your well-being and the planet's
            health. Cleaning with care is a responsibility we embrace with
            pride.
          </p>
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