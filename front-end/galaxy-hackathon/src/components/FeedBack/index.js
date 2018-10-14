import React from 'react';
import {Button, Thumbnail, Col, Row} from 'react-bootstrap';
import './styles.css';

const FeedBack = () => {
  return(
    <Row className='feedBack-container'>
      <div className='feedback-content'>
        <span>
          content...
        </span>
      </div>
      <Row >
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="https://www.rfa.org/vietnamese/news/vietnamnews/provinces-approved-billions-for-flood-overcome-10222016001544.html/bao620.jpg" />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="https://www.rfa.org/vietnamese/news/vietnamnews/provinces-approved-billions-for-flood-overcome-10222016001544.html/bao620.jpg" />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="https://www.rfa.org/vietnamese/news/vietnamnews/provinces-approved-billions-for-flood-overcome-10222016001544.html/bao620.jpg" />
        </Col>
      </Row>
      <Row className='fb-located'>
        <img src='https://cdn4.iconfinder.com/data/icons/shopping-b/512/YPS__tag_B-512.png'/>
        <a><span> Đồng bằng sông Cửu Long</span></a>
        <a><span> Lũ lụt</span></a>
      </Row>
      <Row className='fb-contact'>
        <Button bsStyle="primary" bsSize="small" className='fb-btn-contact'>Contact</Button>
      </Row>
    </Row>
  )
};

export default FeedBack;