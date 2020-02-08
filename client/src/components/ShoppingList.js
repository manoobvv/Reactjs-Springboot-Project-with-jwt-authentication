import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { getItems, deleteItem } from "../actions/itemActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Checkout from "./Checkout";

class ShoppingList extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  // handleInsert() {
  //   const name = prompt("enter item");
  //   if (name)
  //     this.setState(state => ({
  //       items: [...state.items, { id: uuid(), name: name }]
  //     }));
  // }

  onDelete = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { items } = this.props.item;
    return (
      <Container>
        {/* <Button
          color="dark"
          style={{ marginBottom: "2em" }}
          onClick={() => this.handleInsert()}
          //       () => {
          //     const name = prompt("enter item");
          //     if (name)
          //       this.setState(state => ({
          //         items: [...state.items, { id: uuid(), name: name }]
          //       }));
          //   }}
        >
          AddItem
        </Button> */}
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.onDelete(_id);
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                  <Checkout />
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ShoppingList);
