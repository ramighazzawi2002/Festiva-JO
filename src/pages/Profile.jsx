// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [order, setOrder] = useState([]);

//   useEffect(() => {
//     const userIndex = sessionStorage.getItem("customerId");

//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get(
//           `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userIndex}.json`
//         );
//         const userData = response.data;
//         if (userData) {
//           setUser(userData);
//           setName(userData.name);
//           setEmail(userData.email);
//         }
//       } catch (error) {
//         console.error("Error fetching user data:", error);
//       }
//     };

//     const fetchUserTickets = async () => {
//       try {
//         const response = await axios.get(
//           `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/orders.json`
//         );

//         const ordersData = response.data;
//         if (ordersData) {
//           const orders = Object.keys(ordersData).map(orderId => {
//             return { orderId, ...ordersData[orderId] };
//           });

//           setOrder(orders);
//               console.log(orders);

//           const customSess=window.sessionStorage.getItem('customerId');

//             if(customSess === order.customer_id){
//             console.log(order); // Logs orders that match the customerId
//             }

//       }

//       } catch (error) {
//         console.error("Error fetching user tickets:", error);
//       }
//     };

//     if (userIndex) {
//       fetchUserData();
//       fetchUserTickets();
//     }
//   }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const userIndex = sessionStorage.getItem("customerId");

//     try {
//       const updatedUser = { name, email };
//       await axios.put(
//         `https://culture-3-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userIndex}.json`,
//         updatedUser
//       );
//       setUser(updatedUser);
//       setIsEditing(false);
//       alert("Profile updated successfully!");
//     } catch (error) {
//       console.error("Error updating user data:", error);
//     }
//   };

//   return (
//     <div>
//       <NavBar/>
//     <div className="container mx-auto my-32">
//       <div className="max-w-xl mx-auto">
//         {user ? (
//           <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 mb-8">
//             {isEditing ? (
//               <form onSubmit={handleUpdate}>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="name"
//                     className="block text-lg font-medium text-gray-700"
//                   >
//                     Name:
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label
//                     htmlFor="email"
//                     className="block text-lg font-medium text-gray-700"
//                   >
//                     Email:
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   />
//                 </div>
//                 <div className="flex justify-between">
//                   <button
//                     type="submit"
//                     className="bg-red1 text-white px-4 py-2 rounded-md shadow-md hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red1"
//                   >
//                     Save Changes
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setIsEditing(false)}
//                     className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
//                   >
//                     Cancel
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <div>
//                 <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
//                 <p className="text-gray-600 mb-4">{user.email}</p>
//                 <button
//                   onClick={() => setIsEditing(true)}
//                   className="bg-red1 text-white px-4 py-2 rounded-md shadow-md hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red1"
//                 >
//                   Edit Profile
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <p className="text-gray-600 text-center">Loading...</p>
//         )}
//       </div>
//       <div className="max-w-xl mx-auto ">
//         <div className="bg-red1 p-8 rounded-lg shadow-md border border-gray-200">
//           <h2 className="text-2xl font-bold mb-4">My Orders</h2>
//           {order.length > 0 ? (
//             <ul>
//               {order.map((ticket, index) => (
//                 <li key={index} className="mb-2">
//                   <div className="p-4 bg-gray-100 rounded-md shadow-md">
//                     <p className="text-lg font-semibold">{ticket.eventName}</p>
//                     <p className="text-gray-600">Date: {ticket.eventDate}</p>
//                     <p className="text-gray-600">Location: {ticket.city}</p>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">No tickets found.</p>
//           )}
//         </div>
//       </div>
//     </div>
//     <Footer/>
//     </div>
//   );
// };

// export default Profile;

// // import React, { useState } from "react";
// // import { Camera } from "lucide-react";
// // import { Input } from "@/components/ui/input";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardHeader, CardContent } from "@/components/ui/card";
// // import { Alert, AlertDescription } from "@/components/ui/alert";

// // const PersonalProfilePage = () => {
// //   const [profilePic, setProfilePic] = useState("/api/placeholder/150/150");
// //   const [username, setUsername] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [showAlert, setShowAlert] = useState(false);

// //   const handleProfilePicChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setProfilePic(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSave = () => {
// //     // This is where you would typically save the data to your backend or Firebase
// //     // For now, we'll just simulate a save operation with a timeout
// //     setTimeout(() => {
// //       setShowAlert(true);
// //       // Hide the alert after 3 seconds
// //       setTimeout(() => setShowAlert(false), 3000);
// //     }, 1000);
// //   };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <Card className="w-full max-w-md mx-auto">
// //         <CardHeader>
// //           <h2 className="text-2xl font-bold text-center">Personal Profile</h2>
// //         </CardHeader>
// //         <CardContent>
// //           <div className="flex flex-col items-center mb-4">
// //             <div className="relative">
// //               <img
// //                 src={profilePic}
// //                 alt="Profile"
// //                 className="w-32 h-32 rounded-full object-cover"
// //               />
// //               <label
// //                 htmlFor="profile-pic-input"
// //                 className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer"
// //               >
// //                 <Camera size={24} />
// //               </label>
// //               <input
// //                 id="profile-pic-input"
// //                 type="file"
// //                 accept="image/*"
// //                 onChange={handleProfilePicChange}
// //                 className="hidden"
// //               />
// //             </div>
// //           </div>
// //           <div className="space-y-4">
// //             <div>
// //               <label
// //                 htmlFor="username"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Username
// //               </label>
// //               <Input
// //                 id="username"
// //                 type="text"
// //                 value={username}
// //                 onChange={(e) => setUsername(e.target.value)}
// //                 placeholder="Enter your username"
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="password"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Password
// //               </label>
// //               <Input
// //                 id="password"
// //                 type="password"
// //                 value={password}
// //                 onChange={(e) => setPassword(e.target.value)}
// //                 placeholder="Enter your password"
// //               />
// //             </div>
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium text-gray-700"
// //               >
// //                 Email
// //               </label>
// //               <Input
// //                 id="email"
// //                 type="email"
// //                 value={email}
// //                 onChange={(e) => setEmail(e.target.value)}
// //                 placeholder="Enter your email"
// //               />
// //             </div>
// //             <Button onClick={handleSave} className="w-full">
// //               Save
// //             </Button>
// //             {showAlert && (
// //               <Alert variant="success" className="mt-4">
// //                 <AlertDescription>
// //                   Data has been saved successfully!
// //                 </AlertDescription>
// //               </Alert>
// //             )}
// //           </div>
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default PersonalProfilePage;

// import axios from "axios";
// import NavBar from "../components/NavBar";
// import Footer from "../components/Footer";
// import React, { useState } from "react";
// import { Camera } from "lucide-react";
// import { Input } from "./input";
// import { Button } from "./button";
// import { Card, CardHeader, CardContent } from "./card";
// import { Alert, AlertDescription } from "./alert";

// const PersonalProfilePage = () => {
//   const [profilePic, setProfilePic] = useState("/api/placeholder/150/150");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [showAlert, setShowAlert] = useState(false);

//   const handleProfilePicChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSave = () => {
//     setTimeout(() => {
//       setShowAlert(true);
//       setTimeout(() => setShowAlert(false), 3000);
//     }, 1000);
//   };

//   return (
//     <>
//       <NavBar />
//     <div className="container mx-auto px-4 py-8">

//       <div className="flex justify-center">
//         <Card className="w-full max-w-lg p-6">
//           <CardHeader>
//             <h2 className="text-2xl font-bold text-center">Personal Profile</h2>
//           </CardHeader>
//           <CardContent>
//             <div className="flex flex-col items-center mb-4">
//               <div className="relative">
//                 <img
//                   src={profilePic}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full object-cover mb-4"
//                 />
//                 <label
//                   htmlFor="profile-pic-input"
//                   className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer shadow-md"
//                 >
//                   <Camera size={24} />
//                 </label>
//                 <input
//                   id="profile-pic-input"
//                   type="file"
//                   accept="image/*"
//                   onChange={handleProfilePicChange}
//                   className="hidden"
//                 />
//               </div>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="username"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Username
//                 </label>
//                 <Input
//                   id="username"
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter your username"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Password
//                 </label>
//                 <Input
//                   id="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   placeholder="Enter your password"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//                 />
//               </div>
//               <Button
//                 onClick={handleSave}
//                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//               >
//                 Save
//               </Button>
//               {showAlert && (
//                 <Alert variant="success" className="mt-4">
//                   <AlertDescription>
//                     Data has been saved successfully!
//                   </AlertDescription>
//                 </Alert>
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//     </div>
//       <Footer />
//     </>
//   );
// };

// export default PersonalProfilePage;

import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";
import { Card, CardHeader, CardContent } from "./card";
import { Alert, AlertDescription } from "./alert";

const PersonalProfilePage = () => {
  const [profilePic, setProfilePic] = useState("/api/placeholder/150/150");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleProfilePicChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setTimeout(() => {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);
    }, 1000);
  };

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center">
          <Card className="w-full max-w-lg p-6 shadow-lg ">
            <CardHeader>
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Personal Profile
              </h2>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center mb-4">
                <div className="relative">
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                  />
                  <label
                    htmlFor="profile-pic-input"
                    className="absolute bottom-0 right-0 bg-gray-200 rounded-full p-2 cursor-pointer shadow-md hover:bg-gray-300 transition-colors"
                  >
                    <Camera size={24} className="text-gray-600" />
                  </label>
                  <input
                    id="profile-pic-input"
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePicChange}
                    className="hidden"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <Input
                    id="username"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <Button
                  onClick={handleSave}
                  className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition-colors"
                >
                  Save
                </Button>
                {showAlert && (
                  <Alert variant="success" className="mt-4">
                    <AlertDescription>
                      Data has been saved successfully!
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PersonalProfilePage;
