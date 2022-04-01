import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import { graphql } from 'gatsby';

export default function indexPage({ data }) {
  console.log(data);
  const socialLinks = data.allSanitySocialLinks.nodes;
  return (
    <>
      {socialLinks.map((link) => (
        <li key={link.name}> cool link{link.name}</li>
      ))}
    </>
  );
}

export const query = graphql`
  {
    allSanitySocialLinks {
      nodes {
        name
        url
      }
    }
  }
`;
