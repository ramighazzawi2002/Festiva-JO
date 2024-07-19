import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SingUp from "./pages/SingUp";
import ContactUs from "./pages/ContactUs";
import OurStory from "./pages/OurStory";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";
import Details from "./pages/Details";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SingUp" element={<SingUp />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="OurStory" element={<OurStory />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Details" element={<Details />} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="Booking" element={<Booking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
