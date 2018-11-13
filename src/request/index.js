import axios from "axios"
import { eventChannel } from 'redux-saga'
import io from 'socket.io-client';
import { URL } from '../configs';
let socket = io(URL);

export const emitMessage = (message) => {
  return new Promise( (resolve) => {
     socket.emit('post/message', message, () => {
       resolve(socket);
     })
  });
}

// WRAPP @SOCKET: promise wrapping function for socket.on - saga needs promises
export const connectToServer = () => {
  // wrap the connection in a promise (to allow error dispatching)
  return new Promise( (resolve) => {
    // on connection resolve the promise
    socket.on('connect', () => {
      console.log('connected to server');
      resolve(socket);
    });
  });
};

// OPEN @SOCKET:
// Open the socket channel to queue all actions coming in from the server
export const createSocketChannel = socket => eventChannel( (emit) => {
  const handler = (data) => {
    emit(data);
  }
  // listen to task
  socket.on('newMessage', handler );
  return () => {
      // stop listning to those task
      socket.off('newMessage', handler );
  }
});


export function messagePost(message){
  return axios.post('http://localhost:5000/webmsg', {
    message: message
  });
}

export function longPollRequest(){
  return axios({
    method: 'get',
    url: 'http://localhost:5000/webPoll',
  });
}
