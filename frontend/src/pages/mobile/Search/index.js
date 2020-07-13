import React from 'react';

import { ArrowLeft, X } from 'react-feather';

const Search = () => {
  const trendingServices = [
    { name: 'room cleaning', link: '#!' },
    { name: 'hair cutting', link: '#!' },
    { name: 'salon at home', link: '#!' },
    { name: 'shifting', link: '#!' },
    { name: 'cleaners', link: '#!' },
    { name: 'bathroon repair', link: '#!' }
  ];

  const searchResults = [
    { name: 'room cleaning', link: '#!' },
    { name: 'hair cutting', link: '#!' },
    { name: 'salon at home', link: '#!' },
    { name: 'shifting', link: '#!' },
    { name: 'cleaners', link: '#!' },
    { name: 'bathroon repair', link: '#!' }
  ];

  const trendingServicesJSX = trendingServices.map(service => (
    <li key={service.name}>
      <a href={service.link}>{service.name}</a>
    </li>
  ));

  const searchResultsJSX = searchResults.map(result => (
    <li key={result.name}>
      <a href={result.link}>{result.name}</a>
    </li>
  ));

  return (
    <React.Fragment>
      <div className="dv_search_header">
        <ArrowLeft />
        <input
          type="text"
          className="form-control dv_search_mobile_input"
          name
          placeholder="Search here"
        />
        <X />
      </div>
      <div className="dv_mobile_search_wrapper">
        <div className="dv_trending_bullets">
          <span>Trending </span>
          <ul>{trendingServicesJSX}</ul>
        </div>
        <div className="dv_search_result_dropdown">
          <ul>{searchResultsJSX}</ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Search;
