import React from 'react';
import './styles.css';
import {Image, Row} from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import axios from 'axios'

const News = () => {
  return(
    <div className='container-news'>
      <div
        className='news-header'
      >
        <div className='news-info'>
          <Image
            className='news-avt'
            src="http://sohanews.sohacdn.com/thumb_w/660/2016/7-avatar-1478435729759-0-214-355-786-crop-1478435953995.jpg"
            circle
          />
          <span className='news-authorname'>Phuong Thao</span>
        </div>
        <div className='news-title'>
        <span >
          Biến đổi khí hậu tại miền Trung
        </span>
        </div>
      </div>
      <div
        className='news-body'
      >
        <span>
          Hiện nay, vấn đề ô nhiễm môi trường đang là chủ đề nóng trên các mặt báo và nhận được rất nhiều sự quan tâm của người dân...

        <a>Xem tiếp ></a>
        </span>
        <Image src="https://kenh14cdn.com/2017/screen-shot-2017-04-02-at-2-20-29-pm-1491117661107.png" rounded />
        <div style={{marginTop:10}}>
          <img src='https://cdn4.iconfinder.com/data/icons/shopping-b/512/YPS__tag_B-512.png' style={{width:'20px', height: '20px'}}/>
          <a><span className='tag'> Đồng bằng sông Cửu Long</span></a>
          <a><span className='tag'> Lũ lụt</span></a>
        </div>
        <div style={{float:'right'}}>
        </div>
      </div>
    </div>
  )
};

export default News;

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