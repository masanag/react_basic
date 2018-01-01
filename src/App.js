import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  state = {
    posts: [],
  }

  saveNewPost(newPost) {
    const newPostWithId = {
      ...newPost,
      id: Date.now(),
    }
    this.setState({
      posts: [...this.state.posts, newPostWithId]
    });
  }
  render() {
    return (
      <div className="App">
        <Form
          onSubmitNewPost = {
            (newPost) => this.saveNewPost(newPost)
          } />
        <hr />
        <List
          posts={this.state.posts} /> {}
      </div>
    );
  }
}

export default App;
