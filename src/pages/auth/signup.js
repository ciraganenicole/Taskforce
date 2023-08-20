import React, {useState} from 'react';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../firebase';
import { Link, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import Button from '../../components/button';
import Input from '../../components/input';
 
const Signup = () => {
    const navigate = useNavigate();
 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
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
                
                <Button 
                 type="submit"
                 label="Signup"
                 width="w-[150px]"
                 height="h-[40px]"
                 onClick={onSubmit}
                />
          </form>
          <div className="flex flex-row items-center justify-center mt-4 gap-1">
            <p className="text-paragraph100">Don't have an account?</p>
            <Link to="/login" className="text-secondary">Login</Link>
          </div>
          </div>
        </div>        
  )
}
 
export default Signup