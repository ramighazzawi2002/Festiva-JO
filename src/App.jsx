
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Logout from "./pages/Logout";

import NavBar from "./components/NavBar";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import OurStory from "./pages/OurStory";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Details from "./pages/Details";

import Footer from "./components/Footer";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="Logout" element={<Logout />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="OurStory" element={<OurStory />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Catalog" element={<Catalog />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Booking" element={<Booking />} />
        <Route path="Details" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>

  );
}

export default App;
