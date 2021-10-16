import styled from '@emotion/styled';
import React from 'react';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import ButtonLink from '../components/links/button-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledSection } from '../components/_shared/styled-section';

import healthHistory from '../files/ada_health_history.pdf';
import arbitration from '../files/arbitration-consent.pdf';
import financial from '../files/financial-agreement-ii.pdf';

const Styled404Section = styled(StyledSection)`
  min-height: 100vh;
`;
const StyledIntroduction = styled.div`
  color: var(--primary-color);
  margin-left: 3px;
  font-weight: normal;
`;
const StyledDescription = styled.p`
  padding: 0 0.5rem;
  margin: 0;
`;

const PatientForms = () => (
  <Layout menuLinks={blogMenuLinks}>
    <Styled404Section>
      <SEO title="Patient Forms" />
      <StyledIntroduction>Attached below are download links to our Patient Forms!</StyledIntroduction>
      <ButtonLink label="ADA Health History Form" link={healthHistory} direct="_blank" />
      <ButtonLink label="Arbitration Consent Form" link={arbitration} direct="_blank" />
      <ButtonLink label="Financial Agreement Form" link={financial} direct="_blank" />
      <StyledDescription>Please print out all 3 files and have them completed before your appointment! These forms are for all patients: new and current.</StyledDescription>
      <TextLink label="Take me home" link="/" />
      <TextLink label="View Ready Dental Notice of Privacy Practices" link="/privacy" />
    </Styled404Section>
  </Layout>
);

export default PatientForms;
