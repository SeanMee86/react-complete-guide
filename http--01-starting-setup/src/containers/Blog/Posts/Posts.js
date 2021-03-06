import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import Post from "../../../components/Post/Post";
import axiosInstance from "../../../axios";
import './Posts.css';
import FullPost from "../FullPost/FullPost";

class Posts extends Component {
    state = {
        posts: []
    };

    async componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then(res => console.log(res));
        console.log(this.props);
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
            // this.setState({error: true});
            console.log(err)
        }
    }

    postSelectedHandler(id) {
        // this.setState({selectedPostId: id})
        this.props.history.push({
            pathname: '/posts/' + id
        })
    }

    render(){
        let posts = <p style={{textAlign: 'center', color: 'red'}}>Something went Wrong!!!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map(post => (
                //<Link key={post.id} to={'/' + post.id}>
                    <Post
                        key={post.id}
                        clicked={() => this.postSelectedHandler(post.id)}
                        author={post.author}
                        title={post.title}/>
                //</Link>
            ));
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost}/>
            </div>
        )
    }
}

export default Posts;