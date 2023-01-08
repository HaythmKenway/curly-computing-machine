import React from 'react'
import { GoogleLogin } from 'react-google-login'
import TextField from '@mui/material/TextField';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId='242458706163-jt26pj7m25qfo54pk4itld49i8ov0l5h.apps.googleusercontent.com'
const onSuccess=(res)=>{
  console.log("login sucess!! Current user: ",res.profileObj);
}
const onFailure=(res)=>{
console.log("login Failed!! Current user: ",res);
}
function Login() {
  return (
    <section className='login'>
      <GoogleOAuthProvider clientId={{clientId}}">...</GoogleOAuthProvider>;

      <div id="signInButton">
        <GoogleLogin
          clientId={clientId}
          buyyonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}/>
      </div>
    </section>
  );
}

export default Login;