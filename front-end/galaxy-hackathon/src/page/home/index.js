
import { Col, Row } from 'react-bootstrap';
import React, {Component} from 'react';
import Info from './../../components/Info/index';
import Menu from './../../components/Menu/index';
import SideBar from './../../components/SideBar/index';
import NewsFeed from './../../components/NewsFeed/index';
import Group from './../../components/Group/index';
import { Grid } from 'react-bootstrap';
import './styles.css';
import Charts from "./../../components/Chart/index";

class Home extends Component{

  render() {
    return (
      <Grid
        fluid
        className='container-home'
      >
        <div className='home-menu'>
          <Row>
            <Menu/>
          </Row>
        </div>
        <Row>
          <Col md={3} className='home-sidebar fixed'>
            <Info/>
            <SideBar/>
          </Col>
          <Col md={6} className='home-news'>
            <NewsFeed/>
          </Col>
          <Col md={3} className='home-group fixed'>
            <Group/>
          </Col>
        </Row>
      </Grid>
    )
  }
};

export default Home;