import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";
import Statistics from "../components/Statistics";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Statistics />
      <WhyChooseUs />
    </Container>
  );
};
const Container = styled.div`
  margin-top: 4em;
`;

export default Home;
