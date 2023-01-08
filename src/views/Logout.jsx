import React from 'react'
import { GoogleLogout } from 'react-google-login'
import TextField from '@mui/material/TextField';

const onSuccess=(res)=>{
  console.log("logout sucess!! Current user: ",res.profileObj);
}
const onFailure=(res)=>{
console.log("logout Failed!! Current user: ",res);
}
function Logout() {
  return (
    <section className='login'>
      <div id="signInButton">
        <GoogleLogout
          clientId={process.env.clientId}
          buttonText="Login"
          onLogoutSuccess={onSuccess}
          onFailure={onFailure}
          />
      </div>
    </section>
  );
}

export default Logout;