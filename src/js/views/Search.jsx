import React, { Component } from 'react';

import utilities from 'Utilities';

import Form from 'Components/Form';
import Results from 'Components/Results';
import Stores from 'Components/Stores';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    };
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value,
  });

  handleClick = async (id) => {
    const coordinates = await utilities.coordinates();
    const response = await utilities.ajax.get(`https://lcboapi.com/stores?product_id=${id}&lat=${coordinates.coords.latitude}&lon=${coordinates.coords.longitude}`);

    this.setState({
      stores: response.result,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { search } = this.state;

    const response = await utilities.ajax.get(`https://lcboapi.com/products/?q=${encodeURI(search)}`);

    this.setState({
      results: response.result,
      stores: null,
    });
  }

  render() {
    const { results, search, stores } = this.state;

    const fields = [{
      label: 'What product are you looking for?',
      handleChange: this.handleChange,
      name: 'search',
      placeholder: 'Hennessy',
      required: true,
      type: 'text',
      value: search,
    }];

    return (
      <section className="search">
        <div className="search__row">
          <div className="search__column">
            <h1>LCBO Product Finder</h1>
            <Form button="Search" fields={fields} handleSubmit={this.handleSubmit} />
          </div>
          <div className="search__column">
            <Stores stores={stores} />
          </div>
        </div>
        <Results handleClick={this.handleClick} results={results} />
      </section>
    );
  }
}

export default Search;
