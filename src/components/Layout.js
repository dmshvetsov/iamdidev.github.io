import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Location } from '@reach/router';
import { Link, StaticQuery, graphql } from 'gatsby';

import './base.sass';

const QUERY = graphql`
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
`;

const match = (route, location) => RegExp(route).test(location);

const Layout = ({ children }) => (
  <StaticQuery
    query={QUERY}
    render={data => (
      <>
        {/* Head manipulations */}
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
        {/* Navigation */}
        <Location>
          {({ location }) => {
            if (location.pathname === '/') return null;
            return (
              <nav className="sdm-nav">
                {match('^\/blog\/?$', location.pathname) && <Link to="/">Main page</Link>}
                {match('^\/blog\/.+$', location.pathname) && <Link to="/blog">All articles</Link>}
              </nav>
            );
          }}
        </Location>
        <div className="sdm-layout">
          {/* Page content */}
          {children}
          {/* Page footer */}
          <footer className="sdm-layout__block sdm-layout__block--footer">
            <p>© Dmitry Shvetsov, 2016-2019</p>
          </footer>
        </div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
