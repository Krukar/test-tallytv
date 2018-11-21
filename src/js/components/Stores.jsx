import React from 'react';
import PropTypes from 'prop-types';

const Stores = ({ stores }) => {
  if (!stores) return null;

  if (!stores.length) return (<p>Unfortunately no stores carry this product at this time.</p>);

  const list = stores.slice(0, 3).map((store) => {
    const available = `Available at ${store.name}`;
    const distance = `${(store.distance_in_meters / 1000).toFixed(1)}km away.`;

    return (
      <li className="stores__item" key={store.id}>
        {available}
        <em className="stores__em">{distance}</em>
      </li>
    );
  });

  return (
    <div className="stores">
      <h2>Closest Stores</h2>
      <ul className="stores__list">
        {list}
      </ul>
    </div>
  );
};

Stores.propTypes = {
  stores: PropTypes.arrayOf(PropTypes.object),
};

Stores.defaultProps = {
  stores: null,
};


export default Stores;
