import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import {login} from "./features/userSlice"
const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();


  const register = ()=>{
    if(!name){
      return alert("Please Enter Your Full Name");
    }
    auth
    .createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(()=>{
        dispatch(
          login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName : name,
          photoUrl: profilePic,
        }));
      });
    }).catch(error => alert(error));
  };

  const loginToApp = (e)=>{
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password).then(userAuth =>{
      dispatch(login({
        email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName : userAuth.user.displayName,
          profileUrl : userAuth.user.photoURL,
      })
      );
    }).catch((error) => alert(error));
  }
  return (
    <div className='login'>
    <img src="/netcon-main.jpg" alt=""/>
    <form>
      <input type="text" placeholder='Full Name (Req. if registering)' value={name} onChange={(e)=> setName(e.target.value)} />

      <input type="url" placeholder='Profile Pic URL (optional)' value={profilePic} onChange={(e)=> setProfilePic(e.target.value)} />

      <input type="email" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>

      <input type="password" placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />

      <button type='submit' onClick={loginToApp}>Sign In</button>
    </form>

    <p>Not a Member?{" "}
    <span className='login__register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login
