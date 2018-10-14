import React from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';
import './styles.css'

const SideBar = () => {
  return(
    <div
      className='container-sidebar'
    >
        <Button bsStyle="primary" bsSize="small" block>
          Viết bài
        </Button>
      <Button bsStyle="primary" bsSize="small" block>
        Viết bài
      </Button>
      <Button bsStyle="primary" bsSize="small" block>
        Viết bài
      </Button>
      <Button bsStyle="primary" bsSize="small" block>
        Viết bài
      </Button>
    </div>
  )
};

export default SideBar;