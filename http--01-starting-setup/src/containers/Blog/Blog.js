import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
import axiosInstance from "../../axios";

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    };

    async componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => console.log(res));
        try {
            const res = await axiosInstance.get('/posts');
            const posts = res.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'
                }
            });
            this.setState({posts: updatedPosts})
        }catch(err){
            this.setState({error: true});
            console.log(err)
        }
    }

    postSelectedHandler(id) {
        this.setState({selectedPostId: id})
    }

    render () {
        let posts = <p style={{textAlign: 'center', color: 'red'}}>Something went Wrong!!!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map(post => (
                <Post
                    clicked={() => this.postSelectedHandler(post.id)}
                    author={post.author}
                    key={post.id}
                    title={post.title}/>
            ));
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;