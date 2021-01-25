import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import './TeamImg.scss';

const TeamImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fixed(width: 280) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFixed = image.node.childImageSharp.fixed;
      return (
        <Img
          className="rounded shadow-lg team-img"
          alt={alt}
          fixed={imageFixed}
          style={{ width: `${window.innerWidth / 5} px`, height: `${window.innerWidth / 5} px` }}
        />
      );
    }}
  />
);

TeamImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default TeamImg;
