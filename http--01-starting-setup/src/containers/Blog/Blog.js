import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from "./Posts/Posts";
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from "./NewPost/NewPost";
// const AsyncNewPost = asyncComponent(() => {
//     return import("./NewPost/NewPost");
// });
const AsyncNewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true
    };
    render () {
        return (
            <div className={'Blog'}>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}
                                activeClassName={'my-active'}
                                to="/posts"
                                exact>Posts</NavLink></li>
                            <li><NavLink to={{
                                // Relative Path -----> pathname: this.props.match.url + '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route
                        path={'/new-post'}
                        exact
                        render={(props) =>
                            <Suspense fallback={<div>Loading...</div>}>
                                <AsyncNewPost {...props}/>
                            </Suspense>
                        }/> : null}
                    <Route path={'/posts'} component={Posts}/>
                    <Route render={() => <h1>Not Found</h1>} />
                    {/*<Redirect from={'/'} to={'/posts'} />*/}
                    {/*<Route path={'/'} component={Posts}/>*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;

// section 234