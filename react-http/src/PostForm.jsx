import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userid: '',
         title: '',
         body: ''
      }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = e => {
        e.preventDefault(); 
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label htmlFor="">
                User ID: <input onChange={this.changeHandler} type="text" name="userid" />
            </label>
            <br />
            <label htmlFor="">
                Title: <input onChange={this.changeHandler} type="text" name="title" />
            </label>
            <br />
            <label htmlFor="">
                Body: <input onChange={this.changeHandler} type="text" name="body" />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm
