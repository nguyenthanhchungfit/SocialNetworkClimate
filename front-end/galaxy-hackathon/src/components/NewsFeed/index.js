import React from 'react';
import News from './../News/index'
import './styles.css'

const NewsFeed = () => {

  return(
    <div
      className='container-newsfeed'
    >
      <News no = {0}/>
      <News no = {1}/>
      <News no = {2}/>
    </div>
  )
};

export default NewsFeed;