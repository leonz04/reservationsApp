import { useState } from "react"
import getConfigToken from "../services/getConfigToken"
import axios from "axios"

const useCrud =()=>{
    const [response, setResponse] =useState()

    const baseUrl='https://hotels-api.academlo.tech'

    //GET
    const getApi=(path)=>{
        const url=`${baseUrl}${path}`
        axios.get(url, getConfigToken())
        .then((result) => {

            setResponse(result.data)
            
        }).catch((err) => {
            console.log(err)           
        });
    }

    //POST
    const postApi=(path, data)=>{

        const url = `${baseUrl}${path}`
        axios.post(url,data, getConfigToken())
        .then((result) => {
            console.log(result.data)
        }).catch((err) => {

            console.log(err)
            if(err.response.status===403){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            }
        });

    }

    //DELETE

    const deleteApi=(path, id)=>{
        const url = `${baseUrl}${path}/${id}`
        axios.delete(url,getConfigToken())
        .then((result) => {
            setResponse(response.filter(elem=>elem.id!==id))
        }).catch((err) => {
            console.log(err)
        });
    }



    //UPDATE

    const updateApi=(path, id,data)=>{
        const url = `${baseUrl}${path}/${id}`
        axios.patch(url,data,getConfigToken())
        .then((result) => {
            console.log(result.data)
        }).catch((err) => {
            console.log(err)
        });
    }

return [response, getApi, postApi,deleteApi,updateApi]


}

export default useCrud
