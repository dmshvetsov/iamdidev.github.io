import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const fromEdges = (connection) => connection.edges.map(({ node }) => node);

const BlogItem = (props) => {
  const {
    frontmatter: {
      title,
      date,
      formatedDate,
    },
    fields: {
      slug,
    },
  } = props;

  return (
    <article className="sdm-article">
      <a className="sdm-multiline-link" href={slug}>{title}</a>
      <div className="sdm-article__date">
        <time dateTime={date}>{formatedDate}</time>
      </div>
    </article>
  );
};

const Blog = ({ data }) => {
  const posts = fromEdges(data.allMarkdownRemark);

  return (
    <Layout>
      <section className="sdm-layot__block">
        <h1>Blog</h1>
        {posts.map((post, index) => <BlogItem key={index} {...post} />)}
      </section>
    </Layout>
  );
};

BlogItem.propTypes = {
  frontmatter: PropTypes.object,
  fields: PropTypes.object,
};

Blog.propTypes = {
  data: PropTypes.object,
};

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            formatedDate: date(formatString: "DD MMM, YYYY")
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Blog;
