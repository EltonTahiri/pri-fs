import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Container>
      <h1 className="title">Our Services</h1>
      <div className="items">
        <div className="item">
          <h1>01</h1>
          <h2>Residential Cleaning</h2>
          <p>
            Enjoy a pristine home with our comprehensive residential cleaning
            services. Our experienced team will dust, vacuum, mop, and sanitize
            every corner, leaving your living spaces fresh and inviting.
          </p>
        </div>
        <div className="item">
          <h1>02</h1>
          <h2>Commercial Cleaning</h2>
          <p>
            Create a professional and welcoming atmosphere for your business.
            Our commercial cleaning services are tailored to meet the unique
            needs of your workspace, ensuring a clean and organized environment.
          </p>
        </div>
        <div className="item">
          <h1>03</h1>
          <h2>Deep Cleaning</h2>
          <p>
            Experience the ultimate transformation with our deep cleaning
            services. We delve into every detail, tackling built-up grime and
            dirt to reveal a space that feels like new.
          </p>
        </div>
        <div className="item">
          <h1>04</h1>
          <h2>Move-In/Move-Out Cleaning</h2>
          <p>
            Moving can be stressful, but our move-in/move-out cleaning services
            take the hassle out of the process. Whether you're leaving or
            arriving, we'll leave your old or new space spotless.
          </p>
        </div>
        <div className="item">
          <h1>05</h1>
          <h2>Eco-Friendly Cleaning</h2>
          <p>
            Care for your environment while enjoying a clean space. Our
            eco-friendly cleaning services use non-toxic products that are safe
            for you, your family, and the planet.
          </p>
        </div>
        <div className="item">
          <h1>06</h1>
          <h2>Special Event Cleaning</h2>
          <p>
            Ensure your event shines with our special event cleaning services.
            Before and after your gathering, we'll make sure every area is
            impeccably clean, so you can focus on hosting.
          </p>
        </div>
        <div className="item">
          <h1>07</h1>
          <h2>Post-Construction Cleaning</h2>
          <p>
            Construction projects can leave behind a mess. Our post-construction
            cleaning services will remove dust, debris, and any remnants of
            construction, leaving your space ready to enjoy.
          </p>
        </div>
        <div className="item">
          <h1>07</h1>
          <h2>Affordable Cleaning Packages</h2>
          <p>
            Quality cleaning doesn't have to break the bank. Choose from our
            range of affordable cleaning packages that offer exceptional value
            without compromising on results.
          </p>
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
      padding: 20px;
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