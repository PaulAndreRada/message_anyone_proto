import React, { Component } from 'react';

class MessageInput extends Component {
  render(){
    return (
      <form
        onSubmit={ (e) => this.onMessageSubmit(e) }>
        <input
          type='text'
          value={ this.props.composerText }
          onChange={ (e) =>  this.props.onTextChange(e.target.value) }
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
