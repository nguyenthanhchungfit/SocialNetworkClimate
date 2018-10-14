import React from 'react';
import './styles.css'

import { Image, Alert } from 'react-bootstrap';

const Info = () => {
  return(
    <div
    className='container-info'>
      <Image
        className='avatar'
        src="http://sohanews.sohacdn.com/thumb_w/660/2016/7-avatar-1478435729759-0-214-355-786-crop-1478435953995.jpg"
        circle
      />
      <div>Tên: Phuong Thao</div>
      <div>Công việc: nhà báo</div>

    </div>
  )
};

export default Info