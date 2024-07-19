import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [userId, setUserId] = useState("0");

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json"
        );
        const data = response.data;
        if (data && data[userId]) {
          const user = data[userId];
          setName(user.name || "");
          setEmail(user.email || "");
          setProfileImage(user.profileImage || "");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [userId]);

  // const handleImageUpload = async (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //         const formData = new FormData();
  //         formData.append('file', file);
  //         formData.append('upload_preset', 'YOUR_UPLOAD_PRESET');

  //         try {

  //             const uploadResponse = await axios.post('YOUR_IMAGE_UPLOAD_URL', formData);
  //             const imageUrl = uploadResponse.data.url;

  //             await axios.put(`https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userId}.json`, { profileImage: imageUrl });

  //             setProfileImage(imageUrl);
  //         } catch (error) {
  //             console.error("Error uploading image:", error);
  //         }
  //     }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userId}.json`
      );
      const currentUserData = response.data;
      const updatedUser = { ...currentUserData, name, email, profileImage };

      await axios.put(
        `https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userId}.json`,
        updatedUser
      );
      alert("Profile updated successfully💜!");
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <section className="bg-page py-48">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="flex flex-col items-center py-8 px-6">
            <img
              // src={profileImage || "https://via.placeholder.com/150"}
              src="./src/assets/img/profileImg.png"
              alt="Profile"
              className="w-32 h-32 rounded-full mb-6 border-4 border-red1"
            />
            {/* <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="mb-6 ml-6"
                        /> */}
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-red1 text-lg font-semibold"
                >
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red1" // Use custom color here
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-red1 text-lg font-semibold"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red1"
                />
              </div>
              <button
                type="submit"
                className="bg-red1 text-white px-6 py-2 rounded-md shadow-md hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-red1"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
