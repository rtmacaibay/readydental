import styled from '@emotion/styled';
import React from 'react';
import StyledSkewedSection from './skewed-section';
import { mq } from './_shared/media';
import { StyledH1 } from './_shared/styled-headings';
import { StyledStaticImageContainer } from './_shared/styled-image-container';
import { GatsbyImage } from 'gatsby-plugin-image';

const StyledLogoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledFactNumber = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > .number {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }

  & > .fact {
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color);
    margin-left: 2rem;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -2rem;
      width: 1rem;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
`;

const StyledFactsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Facts = ({ data }) => {
  const { frontmatter: { facts_image } } = data;

  const image = facts_image ? facts_image.childImageSharp.gatsbyImageData : null;

  return (
    <StyledSkewedSection angle={10}>
      <StyledFactsContainer>
        <div>
          <StyledH1>Some Interesting Facts</StyledH1>
          <StyledLogoSection>
            <StyledFactNumber>
              <span className="number">4.5 Stars</span>
              <span className="fact">Yelp Review</span>
            </StyledFactNumber>
            <StyledFactNumber>
              <span className="number">1000+</span>
              <span className="fact">Happy Patients</span>
            </StyledFactNumber>
            <StyledFactNumber>
              <span className="number">100+</span>
              <span className="fact">In-Network Insurance Plans</span>
            </StyledFactNumber>
          </StyledLogoSection>
        </div>
        {image && (
          <StyledStaticImageContainer>
            <GatsbyImage image={image} alt="dental care; credit: Andrea Piacquadio" objectFit="contain" />
          </StyledStaticImageContainer>
        )}
      </StyledFactsContainer>
    </StyledSkewedSection>
  );
};

Facts.propTypes = {};

export default Facts;
