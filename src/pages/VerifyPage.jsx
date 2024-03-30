
import { Link,useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";



const VerifyPage = () => {

    const { code: emailCode } = useParams();
    const [ verifiedStatus, setVerifiedStatus ] = useState()
    const navigate=useNavigate()
    const [response, setResponse] = useState()


    useEffect(() => {
     //   verify

            const url=`http://localhost:8080/users/verify/${emailCode}`
            axios.get(url)
            
            .then(res=>{
                setResponse(res.data)
                setVerifiedStatus(true);
                console.log(res.data)


            })
            .catch(err=>{
                console.log(err)
                setVerifiedStatus(false)
            });
    }, [emailCode,setVerifiedStatus]);

    if(verifiedStatus === false) {
        
        return <h2>Not verify</h2>
    }

    
    if(verifiedStatus ===true) {
        return (
            
            <div>
                
                
                <h1 >User verified!</h1>
                <p>
                    <Link to="/login">Login</Link> {" "}
                    with your credentials to enter the app
                </p>
            </div>
        )
    }

    else {
        return (
            <div >
                
              
                <h1 >There was an error</h1>
                <p>
                    <Link to="/users/login">Login</Link> 
                </p>
            </div>
        )
    }

}





export default VerifyPage