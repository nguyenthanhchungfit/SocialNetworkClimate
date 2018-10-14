
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import Info from './../../components/Info/index';
import Menu from './../../components/Menu/index';
import SideBar from './../../components/SideBar/index';
import NewsFeed from './../../components/NewsFeed/index';
import { Grid } from 'react-bootstrap'
import './styles.css';

const Home = () => {
  return(
  <Grid
    fluid
    className='container-home'
  >
    <div className='home-menu'>
      <Row>
        <Menu/>
      </Row>
    </div>
    <Grid>
      <Col md={3} sm={4} className='home-sidebar fixed'>
        <Info/>
        <SideBar/>
      </Col>
      <Col md={6} sm={8} className='home-newsfeed'>
        <NewsFeed/>
      </Col>
    </Grid>
  </Grid>
  )
};

export default Home;