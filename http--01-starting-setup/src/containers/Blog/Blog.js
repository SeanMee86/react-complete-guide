import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from "./Posts/Posts";
import FullPost from "./FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import './Blog.css';

class Blog extends Component {
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
                                to="/"
                                exact>Home</NavLink></li>
                            <li><NavLink to={{
                                // Relative Path -----> pathname: this.props.match.url + '/new-post',
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }} exact>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path={'/'} exact component={Posts}/>
                <Route path={'/new-post'} exact component={NewPost}/>
                <Route path={'/:id'} exact component={FullPost}/>
            </div>
        );
    }
}

export default Blog;

// section 234