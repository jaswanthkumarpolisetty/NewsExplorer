import React from 'react';
import styles from './News.css';

function News({ news }) {
  return (
    <div className="news-card">
      <img src={news.urlToImage} alt={news.title} />
      <h2>{news.title}</h2>
      <p>{news.description}</p>
      <br/>
      <button className='btn-read-more' onClick={()=>window.open(news.url)}>Read More</button>
    </div>
  );
}

export default News;
