import axios from 'axios'

const myHeaders = new Headers()
const token = sessionStorage.getItem('token') || null

myHeaders.append(
  'content-type', 'application/json'
)
myHeaders.append(
  'authorization', token
)
const apiUrl = 'http://localhost:5000'
export const ajax =  (url, data, method)=>{
  let response
  const options = {
    url: `${apiUrl}${url}`,
    method: method,
    headers: myHeaders,
    data: data
  }
  axios(options)
    .then(res=> {response = res})
  return response
}
