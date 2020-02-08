import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";

class itemModal extends Component {
  state = {
    modal: false,
    name: ""
  };
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      name: this.state.name
    };
    this.props.addItem(newItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          AddItem
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>AddToshoppingList</ModalHeader>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="item">Item</Label>
              <input
                type="text"
                name="name"
                id="item"
                onChange={this.onChange}
              />
              <Button color="dark" style={{ marginTop: "2em" }} block>
                submit
              </Button>
            </FormGroup>
          </Form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    item: state.item
  },
  console.log(state)
);

export default connect(
  mapStateToProps,
  { addItem }
)(itemModal);
