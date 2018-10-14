import React, { Component } from 'react';
import { ButtonToolbar, Button, Modal } from 'react-bootstrap';
import './styles.css'

class SideBar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleHide() {
    this.setState({ show: false });
  }
  render() {
    return (
      <div
        className='container-sidebar'
      >
        <Button
          bsStyle="primary"
          bsSize="small"
          block
          onClick={() => this.setState({ show: true })}
        >
          Viết bài
        </Button>
        <Button
          bsStyle="primary"
          bsSize="small"
          block
        >
          Phản hồi
        </Button>
        <Button bsStyle="primary" bsSize="small" block>
          Thống kê
        </Button>

        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
            >
            <Modal.Header closeButton>
              <Modal.Title>Bài viết</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea rows = "5" cols = "75" name = "description" className='text-area' placeholder='Enter details here...'>
         </textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
        </Modal>
      </div>
    )
  }
};

export default SideBar;