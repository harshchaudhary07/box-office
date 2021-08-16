import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [input, setInput] = useState('');

  const onSearch = () => {
    // TVMAZE API

    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then(r => r.json()) // coverting to json
      .then(result => {
        console.log(result);
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
    </MainPageLayout>
  );
};

export default Home;
