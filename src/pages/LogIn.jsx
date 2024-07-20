
// import { auth } from "../firebase-config/firebase";
// import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";

// const LogIn = () => {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       // Update user state based on authentication state
//       setUser(currentUser);
//     });

//     return unsubscribe;
//   }, []);

//   const login = async () => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );
//       const ddd = await axios.get(
//         `https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${customersData.data.length}/email.json`
//       );
//       if (ddd.data == loginEmail ) {
//         // const filteredBooks = Object.keys(response.data)
//         //   .filter((key) => !response.data[key].isDeleted)
//         //   .reduce((obj, key) => {
//         //     obj[key] = response.data[key];
//             let x= sessionStorage.setItem('loginEmail', JSON.stringify(customersData.data.length));

//             return x;
//           }, 
//         // setBooks(filteredBooks);
//       } else {
//         console.log("No data available");
//       }
    
//       // Clear input fields after successful login
//       setLoginEmail("");
//       setLoginPassword("");

//       // Store loginEmail in sessionStorage
//     //   sessionStorage.setItem('loginEmail', JSON.stringify(customersData.data.length));

//       console.log("User successfully logged in:", userCredential.user);
//     } catch (error) {
//       alert("Incorrect email or password. Please try again."); // Display error message
//     }
//   };

//   return (
//     <div>
//       <h3> Login </h3>
//       <input
//         id="LogEmail"
//         placeholder="Email..."
//         value={loginEmail}
//         onChange={(event) => setLoginEmail(event.target.value)}
//       />
//       <input
//         id="LogPass"
//         type="password"
//         placeholder="Password..."
//         value={loginPassword}
//         onChange={(event) => setLoginPassword(event.target.value)}
//       />

//       <button onClick={login}> Login</button>

//       <div className="links">
//         <Link to="/SignUp">
//           <p>Don't have an account yet?</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LogIn;




// import { auth } from "../firebase-config/firebase";
// import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { Link } from "react-router-dom";

// const LogIn = () => {
//   const [loginEmail, setLoginEmail] = useState("");
//   const [loginPassword, setLoginPassword] = useState("");

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       // You may want to update your user state here if needed
//     });

//     return unsubscribe;
//   }, []);

//   const login = async () => {
//     try {
//       // Sign in user with email and password
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         loginEmail,
//         loginPassword
//       );

//       // Fetch customer data based on loginEmail
//       const customersData = await axios.get(
//         `https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json`
//       );

//       // Check if loginEmail exists in customersData
//       let foundEmail = false;
//       let customerId = null;
//       for (const key in customersData.data) {
//         if (customersData.data[key].email === loginEmail) {
//           foundEmail = true;
//           customerId = key;
//           break;
//         }
//       }

//       if (foundEmail) {
//         // Store customer ID in sessionStorage
//         sessionStorage.setItem('customerId', customerId);
//         console.log("Customer ID stored in sessionStorage:", customerId);
//       } else {
//         console.log("No customer found with this email:", loginEmail);
//       }

//       // Clear input fields after successful login
//       setLoginEmail("");
//       setLoginPassword("");

//       console.log("User successfully logged in:", userCredential.user);
//     } catch (error) {
//       alert("Incorrect email or password. Please try again."); // Display error message
//     }
//   };

//   return (
//     <div>
//       <h3> Login </h3>
//       <input
//         id="LogEmail"
//         placeholder="Email..."
//         value={loginEmail}
//         onChange={(event) => setLoginEmail(event.target.value)}
//       />
//       <input
//         id="LogPass"
//         type="password"
//         placeholder="Password..."
//         value={loginPassword}
//         onChange={(event) => setLoginPassword(event.target.value)}
//       />

//       <button onClick={login}> Login</button>

//       <div className="links">
//         <Link to="/SignUp">
//           <p>Don't have an account yet?</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default LogIn;




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
      // You may want to update your user state here if needed
    });

    return unsubscribe;
  }, []);

  const login = async () => {
    try {
      // Sign in user with email and password
      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );

      // Fetch customer data based on loginEmail
      const customersData = await axios.get(
        `https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json`
      );

      // Check if loginEmail exists and account is not marked as deleted
      let foundEmail = false;
      let isDeleted = false;
      let customerId = null;

      for (const key in customersData.data) {
        if (customersData.data[key].email === loginEmail) {
          foundEmail = true;
          isDeleted = customersData.data[key].isDeleted || false; // Default to false if isDeleted is not defined
          customerId = key;

          break;
        }
      }

      if (!foundEmail) {
        alert("No customer found with this email."); // Alert if no customer found
        return;
      }

      if (isDeleted) {
        alert("You can't enter. Your account is deleted."); // Alert if account is marked as deleted
        return;
      }

      // Store customer ID in sessionStorage if account is not deleted
      sessionStorage.setItem('registor', customerId); // Change to store customer ID or any other relevant data

      // Clear input fields after successful login
      setLoginEmail("");
      setLoginPassword("");

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
