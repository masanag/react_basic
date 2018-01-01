import React, { Component } from 'react';

class Form extends Component {
  state = {
    ...this.createInitialForm()
  }

  createInitialForm() {
    return {
      name: "名無しさん",
      age: Ages.TEEN,
      body: "こんにちは",
    };
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleChangeAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  handleChangeBody(event) {
    this.setState({
      body: event.target.body
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, age, body } = this.state;

    if (!name || name.body === 0) {
      alert("本文が未入力です");
      return;
    }

    const newPost = {
      name,
      age,
      body,
    };
    this.props.onSubmitNewPost(newPost);
    this.setState({
      ...this.createInitialForm()
    });
  }

  render() {
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}>
        {/* 単一行テキスト*/}
        <div>
          <label>
            名前:
            <input
              type="text"
              value={this.state.name}
              onChange={(event) => this.handleChangeName(event)} />
          </label>
        </div>
        {/* セレクトボックス */}
        <div>
          <label>
            年齢:
            <select>
              value={this.state.age}
              onChange={(event) => this.handleChangeAge(event)}
              <option value={Ages.TEEN}>10代</option>
              <option value={Ages.TWENTIES}>20代</option>
              <option value={Ages.THIRTIES}>30代</option>
              <option value={Ages.FOURTIES}>40代</option>
              <option value={Ages.FIFTIES}>50代</option>
            </select>
          </label>
        </div>
        {/* 複数行テキスト */}
        <div>
          <label>
            本文:
            <textarea
              value={this.state.body}
              onChange={(event) => this.handleChangeBody(event)} />
          </label>
        </div>
        <input type="submit" value="送信" />
      </form>
    );
  }
}

export const Ages = {
  TEEN: "teen",
  TWENTIES: "twenties",
  THIRTIES: "thirties",
  FOURTIES: "fourties",
  FIFTIES: "fifties",
}

export default Form;
