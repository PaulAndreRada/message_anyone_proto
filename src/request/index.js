import axios from "axios"

export function messagePost(message){
  return axios.post('http://localhost:5000/incmsg', {
    message: message
  });
}
