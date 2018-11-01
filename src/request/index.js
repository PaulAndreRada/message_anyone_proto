import axios from "axios"

/*
// function that makes the api request and returns a promise for response
export function fetchData(){
  return axios({
    method: 'get',
    url: 'http://localhost:5000/'
  });
}
*/

export function messagePost(message){
  return axios.post('http://localhost:5000/incmsg', {
    message: message
  });
}
