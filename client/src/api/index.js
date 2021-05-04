import axios from 'axios'

const url = 'http://localhost:5000/'

export function fetchPost(){
    axios
    .get(url)
    .then((res)=>{
        return
        const datas = res.data
    })
    .catch((err)=>{
        const error = error
    })
}