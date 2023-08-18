import React from "react";
import styled from "styled-components";

const WhyChooseUs = () => {
  return (
    <Container>
      <h2 className="title">Why Choose Us</h2>
      <div className="items">
        <div className="item">
          <img
            src="https://icon-library.com/images/experience-icon-png/experience-icon-png-12.jpg"
            alt=""
          />
          <h3>Years of Experience</h3>
          <p>
            With 3 years of experience in the cleaning industry, we've honed our
            skills and perfected our techniques to deliver exceptional results
            every time.
          </p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6334/6334914.png"
            alt=""
          />
          <h3>Trained Professionals</h3>
          <p>
            Our dedicated team of cleaning experts undergoes rigorous training
            to ensure they are equipped with the knowledge and skills needed to
            tackle even the toughest cleaning challenges.
          </p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1021/1021106.png"
            alt=""
          />
          <h3>Service Excellence</h3>
          <p>
            Our dedication to excellence has earned us a reputation as a trusted
            and reliable cleaning partner in the community.
          </p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6717/6717823.png"
            alt=""
          />
          <h3>Attention to Detail</h3>
          <p>
            We pride ourselves on our meticulous attention to detail, leaving no
            nook or cranny untouched. Our commitment to thoroughness ensures
            that your space is left spotless and gleaming.
          </p>
        </div>
        <div className="item">
          <img
            src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/14-512.png"
            alt=""
          />
          <h3>Satisfaction Guarantee</h3>
          <p>
            Your satisfaction is our top priority. We offer a satisfaction
            guarantee, and if you're not completely happy with our service,
            we'll work to make it right.
          </p>
        </div>
        <div className="item">
          <img
            src="https://www.pngkit.com/png/full/207-2073867_schedule-credit-icon.png"
            alt=""
          />
          <h3>Flexible Scheduling</h3>
          <p>
            Life can be busy, and we get that. Our flexible scheduling options
            allow you to book a cleaning service at a time that is most
            convenient for you.
          </p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/10334/10334115.png"
            alt=""
          />
          <h3>Reliable and Insured</h3>
          <p>
            You can trust us with your space. We are fully insured and take
            every precaution to ensure the safety of your property during the
            cleaning process.
          </p>
        </div>
        <div className="item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1312/1312604.png"
            alt=""
          />
          <h3>Positive Reviews</h3>
          <p>
            Don't just take our word for it. Our satisfied customers rave about
            our services. Check out our glowing reviews and testimonials to see
            what others have to say.
          </p>
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
`;

export default WhyChooseUs;
