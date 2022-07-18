import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import ScrollIndicator from './scroll-indicator';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';
import { StyledStaticImageContainer } from './_shared/styled-image-container';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(100vh - 2 * var(--header-height));
  position: relative;

  ${mq.gt.sm} {
    min-height: calc(100vh - var(--header-height));
  }
`;

const StyledHeroContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledIntroduction = styled.div`
  color: var(--primary-color);
  font-weight: normal;
`;
const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;
  font-family: 'Cooper', serif

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  font-size: 30px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 30px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  max-width: 500px;
`;

const Hero = ({ data }) => {
  const { introduction, author, tagline, description, ctaLink, ctaLabel, hero_image 
  } = data;

  const image = hero_image ? hero_image.childImageSharp.gatsbyImageData : null;

  return (
    <StyledHeroSection>
      <StyledHeroContainer>
        <div>
          <StyledIntroduction>{introduction}</StyledIntroduction>
          <StyledAuthor>{author}</StyledAuthor>
          <StyledTagline>{tagline}</StyledTagline>
          <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
          <ButtonLink label={ctaLabel} link={ctaLink} direct="_self" />
        </div>
        {image && (
          <StyledStaticImageContainer>
            <GatsbyImage image={image} alt="smiling lady; credit: Andrea Piacquadio" objectFit="contain" />
          </StyledStaticImageContainer>
        )}
      </StyledHeroContainer>
      <ScrollIndicator />
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
