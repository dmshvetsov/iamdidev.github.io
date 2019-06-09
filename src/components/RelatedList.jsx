import React from 'react';
import PropTypes from 'prop-types';

const RelatedItem = ({ title, url }) => <li><a href={url} className="sdm-multiline-link">{title}</a></li>;

const RelatedList = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <section className="sdm-layout__block">
      <h2>Related Materials</h2>
      <ul>
        {items.map((item, index) => <RelatedItem key={index} {...item} />)}
      </ul>
    </section>
  );
};

RelatedItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

RelatedList.propTypes = {
  items: PropTypes.array,
};

export default RelatedList;
