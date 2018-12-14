import React, { Component } from 'react';
import styled from 'styled-components';
import PoweredBanner from './poweredbanner';

const ComposerCon = styled.div`
  display: flex;
  flex-direction: column;
`

const Composer = styled.form`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #E6ECF0;
  padding: 14px;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;

  .plusButton {
    display: flex;
    flex-grow: 1;
    padding-top: 3px;

    .plusIcon {
      height: 20px;
      width: 20px;
    }

  }

  .inputBar {
    display: flex;
    flex-grow: 16;
    max-height: 57px;
    border: none;
    resize: none;
    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-size: 17px;
    color: #35333C;
    outline: 0px none transparent;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
      font-size: 17px;
    }
  }

  .button {
    display: flex;
    flex-grow: 1;
    height: 24px;
    max-width: 52px;
    background: #489EB4;
    border: none;
    border-radius: 5px;
    text-align: center;
    padding-top: 8px;
    padding-left: 6px;
    font-family: "Helvetica Neue";
    font-size: 13px;
    font-weight: 500;
    color: #ffff;
  }
`

class MessageInput extends Component {
  constructor(props){
    super(props);
    this.composer = {};
  }
  componentDidMount(){
    this.composer.focus();
  }
  onMessageSubmit(e){
    e.preventDefault();
    this.props.onMessageSubmit(this.props.composerText);
  }
  render(){
    return (
     <ComposerCon>
        <Composer>
          <div className="plusButton">
            <img
              className="plusIcon"
              src={require("../assets/plusicon.svg")}
              alt="attatch button" />
          </div>
          <textarea
            className="inputBar"
            type='text'
            placeholder='Write message here...'
            ref={ (textarea) => { this.composer = textarea } }
            value={ this.props.composerText }
            onChange={ (e) =>  this.props.onTextChange(e.target.value) }
            />
          <div
            className="button"
            onClick={ (e) => this.props.onMessagePost(e, this.props.composerText, this.composer) }>
            Send
          </div>
        </Composer>
        <PoweredBanner />
      </ComposerCon>
    )
  }
}

export default MessageInput;
