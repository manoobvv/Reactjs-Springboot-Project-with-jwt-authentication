import React, { Component } from "react";
import Appnavbar from "./components/Appnavbar";
import ShoppingList from "./components/ShoppingList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/Routes";

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
