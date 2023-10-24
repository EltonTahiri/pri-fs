import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Statistics = () => {
  
  const { t } = useTranslation();
  return (
    <Container>
      <p>{t('statisticsClients')}</p>
      <p>{t('statisticsServices')}</p>
    </Container>
  );
};
const Container = styled.div`
  padding: 1em 4%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4em;
  @media (max-width: 620px) {
    flex-direction: column;
  }
`;

export default Statistics;
