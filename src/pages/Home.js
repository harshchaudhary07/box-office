import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

import { apiGet } from '../misc/config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = () => {
    // TVMAZE API
    /*
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json()) // coverting to json
      .then(result => {
        setResults(result);
        console.log(result);
      }); */
    apiGet(`/search/shows?q=${input}`).onInputChange(reslut => {
      setResults(reslut);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const onKeyDown = ev => {
    // for search using enter key
    if (ev.keyCode === 13) {
      // java script keycodes here 13 = enter button
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}> {item.show.name} </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
