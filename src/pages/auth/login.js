import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import Button from '../../components/button';
import Input from '../../components/input';
 
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/home")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
        <div className="bg-secondary h-[100vh] flex items-center justify-center">
        <div className="bg-primary h-[85vh] w-[80%] lg:w-[35%] m-auto rounded-[15px] p-10">
          <Link to="/landing">
            <img src={logo} alt="logo" className="m-auto"/>
          </Link>
            <form className='w-[100%] mt-10'>
                <Input 
                 type="text"
                 label="Email"
                 placeholder="example@gmail.com"
                 required
                 onChange={(e)=>setEmail(e.target.value)}
                />
                <Input 
                 type="password"
                 label="Password"
                 placeholder="example@2023"
                 required
                 onChange={(e)=>setPassword(e.target.value)}
                />
            
                <Link to="/forget-password" className="text-secondary ml-[68%] lg:ml-[60%]">Forget password?</Link>
                
                <Button 
                 type="submit"
                 label="Login"
                 width="w-[150px]"
                 height="h-[40px]"
                 onClick={onLogin}
                />
          </form>
          <div className="flex flex-row items-center justify-center mt-4 gap-1">
            <p className="text-paragraph100">Don't have an account?</p>
            <Link to="/signup" className="text-secondary">Signup</Link>
          </div>
          </div>
        </div>
        </>
    )
}
 
export default Login