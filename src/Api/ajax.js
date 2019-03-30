import axios from 'axios'

export default function ajax(url,data={},type='GET') {
  let promise

  return new Promise((resolve,rej) => {
    if(type === 'GET'){
      promise = axios.get(url,{params:data})
    } else {
      promise = axios.post(url,data,type)
    }
    promise.then((respone) => {
      console.log(111)
      resolve(respone.data)
    }).catch((err) => {
      console.log(err)
    })
  })
}

