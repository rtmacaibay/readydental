import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import CardGrid from '../components/card-grid';
import Contact from '../components/contact';
import Facts from '../components/facts';
import Hero from '../components/hero';
import Layout from '../components/layout';
import RecentPosts from '../components/recent-posts';
import SEO from '../components/seo';
import { indexMenuLinks } from '../components/_config/menu-links';

const Index = ({ data }) => {
  const heroData = {
    author: data.site.siteMetadata.author,
    tagline: data.hero.frontmatter.tagline,
    introduction: data.hero.frontmatter.introduction,
    ctaLabel: data.hero.frontmatter.cta_label,
    ctaLink: data.hero.frontmatter.cta_link,
  };

  return (
    <Layout menuLinks={indexMenuLinks}>
      <SEO title="Home" />
      <Hero data={heroData} />
      <Facts />
      <CardGrid cards={data.cards.frontmatter.cards} description={data.cards.html} title="Our Services" id="services" />
      <RecentPosts data={data.blog.edges} />
      <Contact data={data.contact} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }

    hero: markdownRemark(fileAbsolutePath: { regex: "/content/sections/hero/" }) {
      frontmatter {
        introduction
        tagline
        cta_label
        cta_link
      }
      html
    }

    cards: markdownRemark(fileAbsolutePath: { regex: "/content/sections/cards/" }) {
      frontmatter {
        cards {
          label
          icon
          prefix
          description
        }
      }
      html
    }

    blog: allMarkdownRemark(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 4
      filter: { fileAbsolutePath: { regex: "/content/posts/" }, frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            tags
            date(formatString: "D MMMM, YYYY")
            description
            cover_image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }

    contact: markdownRemark(fileAbsolutePath: { regex: "/content/sections/contact/" }) {
      frontmatter {
        phone
        fax
        emergency
        email
        address
      }
      html
    }
  }
`;
