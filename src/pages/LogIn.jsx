
import { auth } from "../firebase-config/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const LogIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update user state based on authentication state
      setUser(currentUser);
    });

    return unsubscribe;
  }, []);

  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      // Clear input fields after successful login
      setLoginEmail("");
      setLoginPassword("");

      // Store loginEmail in sessionStorage
      sessionStorage.setItem('loginEmail', JSON.stringify(loginEmail));

      console.log("User successfully logged in:", userCredential.user);
    } catch (error) {
      alert("Incorrect email or password. Please try again."); // Display error message
    }
  };

  return (
    <div>
      <h3> Login </h3>
      <input
        id="LogEmail"
        placeholder="Email..."
        value={loginEmail}
        onChange={(event) => setLoginEmail(event.target.value)}
      />
      <input
        id="LogPass"
        type="password"
        placeholder="Password..."
        value={loginPassword}
        onChange={(event) => setLoginPassword(event.target.value)}
      />

      <button onClick={login}> Login</button>

      <div className="links">
        <Link to="/SignUp">
          <p>Don't have an account yet?</p>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
