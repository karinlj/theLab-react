import React, { Component } from 'react'
import axios from 'axios'

class Post extends Component {
    state = {
        //id: null  //null from start
        post: null
    }
    componentDidMount() {
        //console.log(this.props);
        let id = this.props.match.params.post_id;
        //make requesust for one post
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => { //callback func
                this.setState({
                    post: res.data
                })
                // console.log(res)
            })
        /* this.setState({
            id: id  //id = id (from above)
        }) */
    }

    render() { //render method to generate a template

        const post = this.state.post ? (  //if we have post
            <div className="post">
                <h3 className="card-title">{this.state.post.title}</h3>
                <p className="card-text">{this.state.post.body}</p>
            </div >
        ) : (  //if we do not have post
                <div className="text-center">Loading post...</div>
            )
        return (//return the template
            <div className="post-section">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="post card">
                                <div className="card-body">
                                    {/* <h4>{this.state.id}</h4> */}
                                    {post}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post
