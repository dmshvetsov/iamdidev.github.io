import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../../components/Layout';
import RelatedList from '../../components/RelatedList';

import '../../components/blog.sass';

const Post = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, description, related },
      html,
    }
  } = data;

  return (
    <Layout>
      <article className="sdm-layout__block">
        <h1>{title}</h1>
        <h2 className="sdm-blog__description">{description}</h2>
        <time dateTime="2017-01-30"></time>
        <div className="sdm-blog__content" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <RelatedList items={related} />
    </Layout>
  );
};

Post.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        description
        related {
          title
          url
        }
      }
    }
  }
`;

export default Post;
