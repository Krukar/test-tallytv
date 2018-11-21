import React from 'react';
import PropTypes from 'prop-types';

const Results = ({ handleClick, results }) => {
  if (!results) return null;

  if (!results.length) return (<p>No items found. Please try again.</p>);

  const list = results.map((result) => {
    if (!result.image_thumb_url) {
      return null;
    }

    const price = (result.price_in_cents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

    return (
      <li key={result.id} className="results__item">
        <button className="results__button" type="button" onClick={() => handleClick(result.id)}>
          <img className="results__img" src={result.image_thumb_url} alt={result.tags} />
          <div className="results__name">{result.name}</div>
          <div className="results__package">{result.package}</div>
          <div className="results__price">{price}</div>
        </button>
      </li>
    );
  });

  return (
    <ul className="results">
      {list}
    </ul>
  );
};

Results.propTypes = {
  handleClick: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object),
};

Results.defaultProps = {
  results: null,
};

export default Results;
