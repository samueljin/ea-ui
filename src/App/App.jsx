import React, { useEffect } from 'react';
import { Router, Switch, Redirect } from 'react-router-dom';
import { PrivateRoute } from '../components/PrivateRoute';
import  StandingList  from '../pages/StandingList';
import  RaceList  from '../pages/RaceList';
import { createBrowserHistory } from 'history';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import "../css/styles.css";

const history = createBrowserHistory();

function App() {
    return (
        <div className="row">
            <NavBar />
            <div className="container">
                <Router history={history}>
                    <Switch>
                        <PrivateRoute exact path="/" component={StandingList} />
                        <PrivateRoute exact path="/race" component={RaceList} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export { App };