import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
  const [user, setUser] = useState(null)
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();

  const handleGoogleLogin = () => {

    signInWithPopup(auth, provider)
      .then(result => {
        const googleUser = result.user;
        console.log(googleUser)
        setUser(googleUser)

      })
      .catch(error => {
        console.log(error.message)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(result => {
        console.log(result)
        setUser(null)
      })
      .catch(error => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <p>Authentication</p>
      {
        user ? <button onClick={handleSignOut}> Sign Out</button> : <button onClick={handleGoogleLogin}>Google Login</button>
      }

      {
        user &&
        <div>
          <p>user:{user?.displayName}</p>
          <p>email:{user?.email}</p>
          {user?.photoURL && <img src={user.photoURL} alt="User Profile" />}

        </div>

      }


    </div>
  );
};

export default Login;