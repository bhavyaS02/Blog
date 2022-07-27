import React from 'react'
import {auth, provider} from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    //result holds all the information about user logged in
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true); //if user closes tab then also logged in
      setIsAuth(true);
      navigate("/"); 
    });
  };

  return (
    <div className="loginPage">
      <p>Sign in with Google to continue...</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle} > Sign in with Google</button>
    </div>
  );
}

export default Login