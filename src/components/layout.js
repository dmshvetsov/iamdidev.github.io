import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.sass';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description,
            host,
            gravatar
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'author', content: 'Dmitry Shvetsov' },
            { name: 'og:title', content: data.site.siteMetadata.title },
            { name: 'og:url', content: data.site.siteMetadata.host },
            { name: 'og:description', content: data.site.siteMetadata.description },
            { name: 'og:image', content: data.site.siteMetadata.gravatar },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="sdm-layout">
          {children}
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
