import React from "react";
import styled from "styled-components";

const Statistics = () => {
  return (
    <Container>
      <p>70+ Clients</p>
      <p>Professional Services</p>
      <p>3+ Years of Experince</p>
    </Container>
  );
};
const Container = styled.div`
  padding: 1em 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4em;
`;

export default Statistics;
