import React, { Component } from 'react'
import axios from 'axios'  //library
import { Link } from 'react-router-dom'
import Pokeball from '../img/pokeball.png'
import Sidebar from './Sidebar';

class Blog extends Component { //class based
    state = {
        posts: []  //first empty array
    }
    componentDidMount() {
        //go get data asynchronous
        axios.get('https://jsonplaceholder.typicode.com/posts') //end point from jasonplaceholder
            .then(res => {
                // console.log(res);
                this.setState({
                    posts: res.data.slice(0, 10) //10 first of the data
                })
            })
    }
    render() {
        const { posts } = this.state  //grab posts prop from state
        const postsList = posts.length ? (
            //if true
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="a pokeball" />
                        <div className="card-body">
                            <h4>
                                <Link to={'/' + post.id}>
                                    <span className="card-title">{post.title}</span>
                                </Link>
                            </h4>
                            <p className="card-text">{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (  //if false
                <div className="center">No posts yet</div>
            )
        return (
            <div className="row justify-content-between">
                <div className="col-12 col-md-6">
                    <div className="blog-section">
                        <header>
                            <h1 className="">Blog</h1>
                            <p>Praesent id velit volutpat, finibus mi eleifend, molestie enim. Sed non massa nec lectus feugiat sollicitudin ut et nunc. Ut ac felis tellus.</p>
                        </header>
                        {postsList}
                    </div>
                </div>

                <div className="col-12 col-md-4">
                    <Sidebar />
                </div>

            </div>
        )
    }
}
export default Blog
