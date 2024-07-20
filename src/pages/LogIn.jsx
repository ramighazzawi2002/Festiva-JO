
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
    // <div>
    //   <h3> Login </h3>
    //   <input
    //     id="LogEmail"
    //     placeholder="Email..."
    //     value={loginEmail}
    //     onChange={(event) => setLoginEmail(event.target.value)}
    //   />
    //   <input
    //     id="LogPass"
    //     type="password"
    //     placeholder="Password..."
    //     value={loginPassword}
    //     onChange={(event) => setLoginPassword(event.target.value)}
    //   />

    //   <button onClick={login}> Login</button>

    //   <div className="links">
    //     <Link to="/SignUp">
    //       <p>Don't have an account yet?</p>
    //     </Link>
    //   </div>
    // </div>
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-6 text-center">Login</h3>
      <input
        id="LogEmail"
        type="email"
        placeholder="Email..."
        value={loginEmail}
        onChange={(event) => setLoginEmail(event.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        id="LogPass"
        type="password"
        placeholder="Password..."
        value={loginPassword}
        onChange={(event) => setLoginPassword(event.target.value)}
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={login}
        className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
      <div className="mt-4 text-center">
        <Link to="/SignUp" className="text-blue-500 hover:underline">
          <p>Don't have an account yet?</p>
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
