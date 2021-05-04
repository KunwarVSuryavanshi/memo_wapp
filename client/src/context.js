import React, {useEffect, useState} from 'react';
// import * as api from '../src/api/index'
import axios from 'axios'

const url = 'http://localhost:5000/'
export const UserContext = React.createContext()

export const DataProvider = (props)=>{
    //usestate to create the data    // useEffect(()=> {    //     (async()=>{    //         const data = api.fetchPost()    //         console.log("+++++"+data)    //     })    // },[])
    const [data,setData] = useState([])
    useEffect(()=>{
        fetchAllPost()
    },[]);

    function fetchAllPost(){
        axios
        .get(url)
        .then((res)=>{
            const datas = res.data
            console.log(res)
            console.log(datas)
            setData(datas)
            console.log(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return(
        <UserContext.Provider value={data}>
            {props.children}
        </UserContext.Provider>
    )
}