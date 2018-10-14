import React from 'react';
import { Image, Col, Row } from 'react-bootstrap';
import './styles.css';
const Group = () => {
  return(
    <div className='group-container'>
      <div className='group-title'>
        <span>
          Nhóm
        </span>
      </div>
      <div className='group-content'>
        <Row className='group-item'>
            <Image
              className='group-avt'
              src="http://kientrucvietnam.org.vn/wp-content/uploads/2015/12/Vi-Tri-Can-Ho-Sunrise-Riverside-3.jpg"
              circle />
            <span>Hội khí tượng</span>
        </Row>
        <Row className='group-item'>
          <Image
            className='group-avt'
            src="http://kientrucvietnam.org.vn/wp-content/uploads/2015/12/Vi-Tri-Can-Ho-Sunrise-Riverside-3.jpg"
            circle />
          <span>Hội khí tượng</span>
        </Row>
        <Row className='group-item'>
          <Image
            className='group-avt'
            src="http://kientrucvietnam.org.vn/wp-content/uploads/2015/12/Vi-Tri-Can-Ho-Sunrise-Riverside-3.jpg"
            circle />
          <span>Hội khí tượng</span>
        </Row>
      </div>
    </div>
  )
};

export default Group;