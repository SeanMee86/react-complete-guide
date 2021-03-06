import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Users from './containers/Users'
import asyncComponent from "./hoc/asyncComponent";

const AsyncPizza = asyncComponent(() => import('./containers/Pizza.js'));

class App extends Component {
    render() {
        return(
            <div>
                <div>
                    <Link to={'/'}>Users</Link>
                    <Link to={'/pizza'}>Pizza</Link>
                </div>
                <div>
                    <Route path={'/pizza'} component={AsyncPizza}/>
                    <Route exact path={'/'} component={Users}/>
                </div>
            </div>
        )
    }
}

export default App;