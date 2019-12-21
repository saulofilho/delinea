import React from 'react'
import { Router, Switch, Route } from 'react-router'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import Create from '../create/Create';
import Edit from '../edit/Edit';
import List from '../list/List';
import Home from '../home/Home';
import Header from '../header/Header';
import PrivateRoute from './PrivateRoutes';

import { history } from '../../history';

const Routes = () => (
    <Router history={history}>
        <main className="small-container">
            <Header />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <PrivateRoute exact path="/app" component={Home} />
                <PrivateRoute exact path="/app/list" component={List} />
                <PrivateRoute exact path="/app/create" component={Create} />
                <PrivateRoute exact path="/app/edit/:id" component={Edit} />
            </Switch>
        </main>
    </Router>
);

export default Routes;