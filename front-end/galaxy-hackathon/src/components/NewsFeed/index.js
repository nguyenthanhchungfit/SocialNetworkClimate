import React from 'react';
import News from './../News/index'
import './styles.css'

const NewsFeed = () => {
  return(
    <div
      className='container-newsfeed'
    >
      <News/>
      <News/>
      <News/>
      <News/>
      <News/>
    </div>
  )
};

export default NewsFeed;