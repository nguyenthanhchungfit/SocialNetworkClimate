import React from 'react';
import './styles.css';
import { Image } from 'react-bootstrap';
import axios from 'axios'


  export default class News extends React.Component {
    state = {
      news: [],
      user: null,
    }
  
    componentWillMount() {
      console.log('==willmount');
      axios.get('http://localhost:3001/api/feed')
        .then(res => {
          const news = res.data.feeds;
          console.log('==result',news);
          this.setState({ news: news });
        }).catch(err => console.log('==err', err))
      
      let url = 'http://localhost:3001/api/user/' + this.props.no;
      console.log(url);
      axios.get(url)
        .then(res => {
          const user = res.data.user;
          console.log('aaaaaaaaaaa',user)
          this.setState({ user: user });
        }).catch(err => console.log('==err', err))
    }
  
    render() {
      console.log('==render', this.state.news);
      let username = "...";
      let content = "..";
      let title = ".";
      let userId = 1;
      let urlavatar = 'http://sohanews.sohacdn.com/thumb_w/660/2016/7-avatar-1478435729759-0-214-355-786-crop-1478435953995.jpg';
      if(this.state.news.length != 0){
        userId = this.state.news[this.props.no].userId;
        content = this.state.news[this.props.no].content;
        title = this.state.news[this.props.no].title;
      }
      
      if(this.state.user != null){
        urlavatar = 'http://' + this.state.user.avt;
        username = this.state.user.userName;
      }
      
      return (
        <div className='container-news'>
          <div
            className='news-header'
          >
            <div className='news-info'>
              <Image
                className='news-avt'
                src={urlavatar}
                circle
              />
              <span className='news-authorname'>{username}</span>
            </div>
            <div className='news-title'>
            <span >
              {title}
            </span>
            </div>
          </div>
          <div
            className='news-body'
          >
            <span>
              {content}
            </span>
          </div>
        </div>
      )
    }
  };