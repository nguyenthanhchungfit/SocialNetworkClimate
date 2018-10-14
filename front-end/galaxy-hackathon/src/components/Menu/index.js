import React from 'react';
import { Nav, NavItem, Navbar, Col, Row } from 'react-bootstrap';
import './styles.css';

const Menu = () => {
  return(
      <Row className='menu-container'>
        <Col md={3}>
          <strong>Logo</strong>
        </Col>
        <Col md={5}>
          <input type='text' placeholder='Tìm kiếm'/>
        </Col>
        <Col md={4}>
          <span>
          Trang chủ
        </span>
        </Col>
      </Row>
  )
};

export default Menu;