import React, { Component } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import Icon from "../Images/nle.jpg";
import { addDetails, getDetails } from "../actions/itemActions";

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label
} from "reactstrap";
class About extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      name: ""
    };
  }
  componentDidMount() {
    this.props.getDetails();
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newDetails = {
      name: this.state.name
    };
    this.props.addDetails(newDetails);
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const { details } = this.props.item;
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label for="item">Item</Label>
                    <Input
                      type="textarea"
                      name="name"
                      id="exampleText"
                      onChange={this.onChange}
                    />
                    <Button color="dark" style={{ marginTop: "2em" }} block>
                      submit
                    </Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="10">
                <img src={Icon} />
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  {details.map(({ _id, restaurantName }) => (
                    <div key={_id}>{restaurantName}</div>
                  ))}
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getDetails, addDetails }
)(About);
