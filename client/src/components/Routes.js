import React, { Component } from "react";
import { render } from "react-dom";
import {
  Route,
  BrowserRouter,
  Router,
  browserHistory,
  withRouter,
  IndexRoute,
  Switch
} from "react-router-dom";
import Appnavbar from "./Appnavbar";
import AdminTab from "./AdminTab";
import Explore from "./Explore";
import Checkout from "./Checkout";
import shoppincart from "./Shoppingcart";
import Login from "./Login";
import Signup from "./Signup";
//import { render } from "react-dom";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route component={Appnavbar}> */}
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Appnavbar>
              <Route exact path="/admin" component={AdminTab} />
              <Route exact path="/explore" component={Explore} />
              {/* <Route
              path="/explore/:name"
              render={(props) => <Checkout text="Hello, " {...props} />} */}
              <Route
                path="/explore/:name"
                render={props => (
                  <div>
                    <Checkout {...props} />
                  </div>
                )}
              />
              <Route exact path="/shoppincart" component={shoppincart} />
            </Appnavbar>
          </Switch>
          {/* </Route> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default Routes;
