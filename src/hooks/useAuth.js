import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginG } from "../store/states/login.state";

const useAuth = () => {

    // const [login,setLogin]=useState(false)
    const dispatch = useDispatch()
    const login = useSelector(states => states.login)



    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            dispatch(setLoginG(true))
        }
      }, [login]);

    const navigate = useNavigate()

    //Register

    const createNewUser =userData=>{
        const frontBaseUrl = `${location.protocol}//${location.host}/#/verify`;
        const data = { ...userData, frontBaseUrl } 
        
        const url='http://localhost:8080/users'
        axios.post(url,data)
        .then((result) => {
            console.log(result.data);
            
        }).catch((err) => {

            console.log(err);            
        });

    }

    

    // login

    const loginUser= async (data,e)=>{

        const url= 'http://localhost:8080/users/login'
        return axios.post(url,data)
            .then((result) => {
                
                console.log(result.data);
                navigate('/')
                localStorage.setItem('token', result.data.token)
                localStorage.setItem('user',JSON.stringify(result.data.user))
                window.location.reload();  
                
            });
       
        
        
    }

    
    
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        dispatch(setLoginG(!login))
        window.location.reload(); 

    };
    return {createNewUser, loginUser, login, logout}
}

export default useAuth