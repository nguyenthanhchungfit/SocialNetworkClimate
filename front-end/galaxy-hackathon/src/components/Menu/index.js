import React from 'react';
import { Nav, NavItem, Navbar, Col, Row } from 'react-bootstrap';
import './styles.css';

const Menu = () => {
  return(
      <Row className='menu-container'>
        <Col md={3} className='menu-logo'>
          <strong>Logo</strong>
        </Col>
        <Col md={5} className='menu-search'>
          <input type='text' placeholder='Tìm kiếm' style={{width: '100%', color: 'black'}}/>
        </Col>
        <Col md={4}>
          <span>
          Trang chủ
        </span>
          <span>
          </span>
        </Col>
      </Row>
  )
};

export default Menu;