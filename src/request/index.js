import axios from "axios"

export function messagePost(message){
  return axios.post('http://localhost:5000/webmsg', {
    message: message
  });
}

export function messagesRequest(){
  return axios({
    method: 'get',
    url: 'http://localhost:5000/loadmsgs',
  });
}

export function longPollRequest(){
  return axios({
    method: 'get',
    url: 'http://localhost:5000/webPoll',
  });
}
