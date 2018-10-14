import React from 'react';
import './styles.css';
import { Image } from 'react-bootstrap';

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
          Hiện nay, vấn đề ô nhiễm môi trường đang là chủ đề nóng trên các mặt báo và nhận được rất nhiều sự quan tâm của người dân. Trong đó, đặc biệt là vấn đề ô nhiễm nguồn nước ở Việt Nam đã và đang ngày càng trở nên nghiêm trọng hơn. Thông qua các phương tiện truyền thông, chúng ta có thể dễ dàng thấy được các hình ảnh, cũng như các bài báo phản ánh về thực trạng môi trường hiện nay. Mặc dù các ban
        </span>
      </div>
    </div>
  )
};

export default News;