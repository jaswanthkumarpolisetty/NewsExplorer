import React, { useEffect, useRef, useState } from 'react';
import News from './News';
import './NewsApp.css';

function NewsApp() {
  const apiKey = '77c8d9571ded469485630a4f24a27456';

  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState('cricket');
  const queryInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-05-21&sortBy=publishedAt&apiKey=${apiKey}`;
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setNewsList(jsonData.articles);
    } catch (error) {
      console.log(error, 'error occurred');
    }
  }
  

  function handleSubmit(event) {
    event.preventDefault();
    const queryValue = queryInputRef.current.value;
    setQuery(queryValue);
  }

  return (
    <div className='container'>
      <h1 style={{fontFamily:'monospace', fontSize:'3rem' ,textAlign: 'left',marginBottom:'20px'}}>News Daily</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={queryInputRef}
          className="search-input"
          placeholder="Enter your search term..."
        />
        <br/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 48%)',
          justifyContent: 'space-between',
          rowGap: '20px'
        }}
      >
        {newsList.map(news => (
          <News key={news.url} news={news} />
        ))}
      </div>
    </div>
  );
}

export default NewsApp;



