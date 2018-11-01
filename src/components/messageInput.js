import React, { Component } from 'react';

class MessageInput extends Component {
  render(){
    return (
      <form
        onSubmit={ (e) => this.props.onMessagePost(e, this.props.composerText) }>
        <input
          type='text'
          value={ this.props.composerText }
          onChange={ (e) =>  this.props.onTextChange(e.target.value) }
          />
        <input
          type='submit'
          value='send'
          />
      </form>
    )
  }
  onMessageSubmit(e){
    e.preventDefault();
    console.log(this.props.composerText);
    this.props.onMessageSubmit(this.props.composerText);
  }
}

export default MessageInput;
