import axios from 'axios'

export default function ajax(url,data={},type='GET') {
  let promise

  return new Promise((resolve,rej) => {
    if(type === 'GET'){
      console.log('send', url)
      promise = axios.get(url,{params:data})
    } else {
      promise = axios.post(url,data,type)
    }
    promise.then((respone) => {
      resolve(respone.data)
    }).catch((err) => {
      console.log(err)
    })
  })
}

