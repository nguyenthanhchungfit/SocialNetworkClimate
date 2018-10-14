import React,{ Component } from 'react';
import News from './../News/index';
import './styles.css';
import FeedBack from './../FeedBack/index';

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: true,
      feedBack: false
    }
  }

  render() {
    return (
      <div
        className='container-newsfeed'
      >
        {this.state.news ?
          <div>
            <News no={0}/>
            <News no={1}/>
            <News no={2}/>
          </div> :
          <div>
            <FeedBack/>
            <FeedBack/>
            <FeedBack/>
            <FeedBack/>
          </div>
        }
      </div>
    )
  }
}

export default NewsFeed;