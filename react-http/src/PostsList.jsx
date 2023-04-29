import React, { Component } from 'react';
import axios from 'axios';

class PostsList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: []
      }
    }
    
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            this.setState({ posts: response.data })
        })
        .catch(error => console.log(error));
    }

  render() {
    const { posts } = this.state
    console.log(posts.length)
    return (
      <>
        <h1>Posts Lists</h1>  
        <div>
        {
            posts.length ?
            posts.map(post => <p key={post.id}>{ post.title }</p>):
            null
        }
      </div>
      </>
    )
  }
}

export default PostsList
