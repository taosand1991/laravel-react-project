import React, { Component, Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

export default class Navigation extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/home" component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/logout" component={Logout} />
                    <Redirect to={"/login"} />
                </Switch>
            </Fragment>
        );
    }
}