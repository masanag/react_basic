import React, { Component } from 'react';
import { Ages } from "./Form"

class List extends Component {
  renderPost(post) {
    return(
      <div>
        <div>名前: {post.name}</div>
        <div>年齢: {this.convertAge(post.age)}</div>
        <div>本文: {post.body}</div>
      </div>
    );
  }

  convertAge(age) {
    switch(age) {
      case Ages.TEEN:
        return "10代";
      case Ages.TWENTIES:
        return "20代";
      case Ages.THIRTIES:
        return "30代";
      case Ages.FOURTIES:
        return "40代";
      case Ages.FIFTIES:
        return "50代";
      default:
        throw Error(`不明なageです: ${age}`)
    }
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              {this.renderPost(post)}
            </div>
          );
        })}
      </div>
    )
  }
}

export default List;
