import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {

    const [login,setLogin]=useState(false)


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
          setLogin(true);
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

    const loginUser=data=>{
        const url= 'http://localhost:8080/users/login'
        axios.post(url,data)
        .then((result) => {

            console.log(result.data);
            navigate('/')
            localStorage.setItem('token', result.data.token)
            localStorage.setItem('user',JSON.stringify(result.data.user))
            setLogin(true);
            window.location.reload();      
        }).catch((err) => {
            console.log(err);
        });
        
    }

    
    
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setLogin(false);
        window.location.reload(); 

    };
    return {createNewUser, loginUser, login, logout}
}

export default useAuth