import React, { useState } from 'react';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';


const Login = () => {
  const [user, setUser] = useState(null)
  // const [githubUser, setGithubUser] = useState(null)
  const auth = getAuth(app);

  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

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

  const handleGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const githubUser = result.githubUser;
        console.log(githubUser)
        setUser(githubUser)
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
        user ? <button onClick={handleSignOut}> Sign Out</button> :
          <div>
            <button onClick={handleGoogleLogin}>Google Login</button>
            <button onClick={handleGithub}>Github Login</button>
          </div>
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