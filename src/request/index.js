import { eventChannel } from 'redux-saga'
import io from 'socket.io-client';
import { URL } from '../configs';
let socket = io(URL);

export const emitMessage = (message) => {
  return new Promise( (resolve) => {
     socket.emit('post/message', message, 'web', () => {
       resolve(socket);
     })
  });
}

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

// Channel - queues events comming in from the server
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
