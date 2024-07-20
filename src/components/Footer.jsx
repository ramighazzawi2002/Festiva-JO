
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>
            Welcome to Festi Tecki, your number one source for all festival
            tickets.
          </p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/Admin">Home</Link>
            </li>
            <li>
              <Link to="/Details">About</Link>
            </li>
            <li>
              <Link to="/OurStory">Our Story</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Get Tickets</h4>
          <ul>
            <li>
              <Link to="/tickets">Buy Tickets</Link>
            </li>
            <li>
              <Link to="/tickets/vip">VIP Tickets</Link>
            </li>
            <li>
              <Link to="/tickets/early-bird">Early Bird Tickets</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Festi Tecki | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Profile = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [profileImage, setProfileImage] = useState(''); 
//     const [userId, setUserId] = useState('0');

//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const response = await axios.get('https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json');
//                 const data = response.data;
//                 if (data && data[userId]) {
//                     const user = data[userId];
//                     setName(user.name || '');
//                     setEmail(user.email || '');
//                     setProfileImage(user.profileImage || ''); 
//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         getData();
//     }, [userId]);

//     const handleImageUpload = async (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const formData = new FormData();
//             formData.append('file', file);
//             formData.append('upload_preset', 'YOUR_UPLOAD_PRESET'); 

//             try {
                
//                 const uploadResponse = await axios.post('YOUR_IMAGE_UPLOAD_URL', formData);
//                 const imageUrl = uploadResponse.data.url;
//                 setProfileImage(imageUrl); 

                
//                 await axios.put(`https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userId}.json`, { profileImage: imageUrl });
//             } catch (error) {
//                 console.error("Error uploading image:", error);
//             }
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
           
//             const response = await axios.get(`https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userId}.json`);
//             const currentUserData = response.data;
//             const updatedUser = { ...currentUserData, name, email, profileImage };

//             await axios.put(`https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${userId}.json`, updatedUser);
//             alert('Profile updated successfully!');
//         } catch (error) {
//             console.error("Error updating data:", error);
//         }
//     };

//     return (
//         <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//             <div className="flex flex-col items-center">
//                 <img
//                     src={profileImage || "https://via.placeholder.com/150"}
//                     alt="Profile"
//                     className="w-32 h-32 rounded-full mb-4"
//                 />
//                 <input
//                     type="file"
//                     accept="image/*"
//                     onChange={handleImageUpload}
//                     className="mb-4"
//                 />
//                 <form className="w-full" onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label htmlFor="username" className="block text-gray-700">Username:</label>
//                         <input
//                             type="text"
//                             id="username"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="mt-1 p-2 w-full border rounded"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700">Email:</label>
//                         <input
//                             type="email"
//                             id="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="mt-1 p-2 w-full border rounded"
//                         />
//                     </div>
//                     <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
//                         Edit
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Profile;


// import React from 'react';
// import Navbar from '../components/NavBar';
// import Footer from '../components/Footer';
// import { useState } from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import axios from 'axios';

// export default function Home() {
//   const [email, setEmail] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState('');
//   const [active, setActive] = useState(0);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     // Simple email validation
//     if (!email || !/\S+@\S+\.\S+/.test(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     setError('');

//     try {
//       const response = await axios.post(
//         'https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/emails.json',
//         { email }
//       );
  
//       if (response.status !== 200) {
//         throw new Error('Network response was not ok.');
//       }
  
//       setEmail('');
//       setSubmitted(true);
//     } catch (error) {
//       setError('There was an issue with the submission. Please try again.');
//     }
//   };
  
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };

//   const slides = [
//     {
//       id: 1,
//       image: './src/assets/img/slide-1.png',
//       title: 'Welcome to the Jordan Culture Festival',
//       description: 'Experience the vibrant culture and traditions of Jordan through our exciting festival events.',
//       btn: 'Learn More'
//     },
//     {
//       id: 2,
//       image: './src/assets/img/image-3.png',
//       title: 'Get Your Tickets Now',
//       description: 'Don’t miss out on our exclusive performances, workshops, and more. Buy your tickets today!',
//       btn: 'Buy Tickets'
//     },
//     {
//       id: 3,
//       image: './src/assets/img/image-2.png',
//       title: 'Join Us for an Unforgettable Experience',
//       description: 'Celebrate with us and immerse yourself in the rich heritage of Jordan.',
//       btn: 'Explore Events'
//     },
//   ];
// // ---------------sec2
// const festivals = [
//   {
//     id: 1,
//     name: 'Jordanian Cultural Festival',
//     date: 'August 12, 2024',
//     location: 'Amman',
//     description: 'Experience the rich cultural heritage of Jordan with traditional music, dance, and food.',
//     link: '/festivals/jordanian-cultural-festival',
//   },
//   {
//     id: 2,
//     name: 'Petra Arts Festival',
//     date: 'September 5, 2024',
//     location: 'Petra',
//     description: 'Join us for a celebration of arts and crafts amidst the ancient ruins of Petra.',
//     link: '/festivals/petra-arts-festival',
//   },
//   {
//     id: 3,
//     name: 'Jerash Music Fest',
//     date: 'October 10, 2024',
//     location: 'Jerash',
//     description: 'Enjoy a weekend of music performances in the historical city of Jerash.',
//     link: '/festivals/jerash-music-fest',
//   },
// ];
// // sec-3

// const categories = [
//   {
//     id: 1,
//     name: 'Music',
//     description: 'Explore a variety of music festivals featuring local and international artists.',
//     link: '/categories/music',
//     imageUrl: 'https://via.placeholder.com/300x200?text=Music+Festivals',
//   },
//   {
//     id: 2,
//     name: 'Food',
//     description: 'Discover food festivals showcasing Jordanian and international cuisines.',
//     link: '/categories/food',
//     imageUrl: 'https://via.placeholder.com/300x200?text=Food+Festivals',
//   },
//   {
//     id: 3,
//     name: 'Art',
//     description: 'Immerse yourself in art festivals with exhibitions, workshops, and live performances.',
//     link: '/categories/art',
//     imageUrl: 'https://via.placeholder.com/300x200?text=Art+Festivals',
//   },
// ];
// // sec-4
// const featuredFestivals = [
//   {
//     id: 1,
//     name: 'Jerash Festival of Culture and Arts',
//     date: 'August 20 - August 30, 2024',
//     location: 'Jerash',
//     description: 'One of the most famous festivals in Jordan, featuring a mix of music, dance, and cultural performances in the ancient city of Jerash.',
//     imageUrl: 'https://via.placeholder.com/600x400?text=Jerash+Festival',
//     ticketLink: '/tickets/jerash-festival',
//   },
//   {
//     id: 2,
//     name: 'Amman Summer Festival',
//     date: 'July 15 - August 5, 2024',
//     location: 'Amman',
//     description: 'A vibrant festival held in Amman showcasing local and international artists, street performances, and food stalls.',
//     imageUrl: 'https://via.placeholder.com/600x400?text=Amman+Summer+Festival',
//     ticketLink: '/tickets/amman-summer-festival',
//   },
//   {
//     id: 3,
//     name: 'Petra International Music Festival',
//     date: 'September 10 - September 15, 2024',
//     location: 'Petra',
//     description: 'Enjoy classical and contemporary music performances in the stunning setting of Petra, one of the world’s wonders.',
//     imageUrl: 'https://via.placeholder.com/600x400?text=Petra+Music+Festival',
//     ticketLink: '/tickets/petra-music-festival',
//   },
// ];
// // sec-4
// const specialOffers = [
//   {
//     id: 1,
//     title: 'Early-Bird Discount',
//     description: 'Get 20% off on tickets purchased before July 31, 2024. Limited time offer!',
//     imageUrl: 'https://via.placeholder.com/600x400?text=Early-Bird+Discount',
//     link: '/specials/early-bird-discount',
//   },
//   {
//     id: 2,
//     title: 'Family Package',
//     description: 'Buy 4 tickets and get 1 free! Perfect for a family outing to the Amman Summer Festival.',
//     imageUrl: 'https://via.placeholder.com/600x400?text=Family+Package',
//     link: '/specials/family-package',
//   },
//   {
//     id: 3,
//     title: 'VIP Experience',
//     description: 'Upgrade to a VIP pass for exclusive access to backstage areas and premium seating.',
//     imageUrl: 'https://via.placeholder.com/600x400?text=VIP+Experience',
//     link: '/specials/vip-experience',
//   },
// ];
// // sec-------5
// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     role: 'CEO at Company',
//     image: 'https://via.placeholder.com/150',
//     testimonial: 'This is an amazing service! It has greatly improved our productivity and efficiency. Highly recommend!'
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     role: 'Marketing Manager',
//     image: 'https://via.placeholder.com/150',
//     testimonial: 'Incredible experience. The support team is fantastic, and the results speak for themselves.'
//   },
//   {
//     id: 3,
//     name: 'Mike Johnson',
//     role: 'Product Designer',
//     image: 'https://via.placeholder.com/150',
//     testimonial: 'A game-changer for our business. Easy to use and integrates seamlessly with our workflow.'
//   },
// ];
//   return (
 
//     <div className="max-w-screen  p-4 bg-page">
//        <Navbar/>
//       <div className="slider-hero mb-8 mx-4 sm:mx-8">
//         <Slider {...settings}>
//           {slides.map(slide => (
//             <div key={slide.id} className="relative rounded-xl overflow-hidden shadow-lg">
//               <img src={slide.image} alt={slide.title} className="w-full  object-cover" />
//               <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
//                 <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-red1">{slide.title}</h2>
//                 <p className="text-sm sm:text-lg mb-6">{slide.description}</p>
//                 <button className="bg-red1 text-white py-2 px-4 sm:py-2 sm:px-6 rounded-lg hover:bg-blue-600 transition duration-300">
//                   {slide.btn}
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <section className="py-12 ">
//   <div className="container mx-auto px-6 md:px-12">
//     <div className="text-center md:flex md:items-center md:space-x-12">
//       <div className="md:w-1/2 mb-8 md:mb-0">
//         <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8">
//           Why Festivals Matter
//         </h2>
//         <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
//           Festivals in Jordan are a vibrant celebration of life, art, and tradition. They bring people together from all walks of life, fostering a sense of community and shared experience. These events offer a glimpse into the rich cultural tapestry of the country, showcasing everything from lively music performances to exquisite culinary delights and traditional arts.
//         </p>
//         <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-6">
//           Each festival serves as a canvas for storytelling, where every performance, dish, and art piece reflects the heritage and creativity of Jordanian culture. By participating in these events, you not only enjoy a feast for the senses but also contribute to the preservation and celebration of the cultural traditions that make Jordan unique.
//         </p>
//         <p className="text-gray-800 text-base md:text-lg leading-relaxed">
//           At <span className="font-semibold text-red-600">Festi Tecki</span>, we are dedicated to highlighting the significance of these festivals and sharing their stories with the world. We invite you to join us in exploring the magic of Jordan’s festivals, where every moment is an opportunity to connect with the heart of Jordanian culture and create lasting memories.
//         </p>
//       </div>
//       <div className="md:w-1/2">
//         <img src="./src/assets/img/joflag.png" alt="Jordan Flag" className="mx-auto md:max-w-full rounded-xl" />
//       </div>
//     </div>
//   </div>
// </section>
      

//       {/* Upcoming Festivals */}

//       <section className="py-10 bg-white-200">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-red-600">Upcoming Festivals</h2>
//           <div className="flex flex-col sm:flex-row sm:space-x-8 overflow-x-auto">
//             {festivals.map(festival => (
//               <div key={festival.id} className="bg-white p-6 rounded-lg shadow-lg mb-4 sm:mb-0 flex-shrink-0 w-full sm:w-1/3">
//                 <h3 className="text-xl font-semibold">{festival.name}</h3>
//                 <p className="text-gray-600">{festival.date} - {festival.location}</p>
//                 <p className="text-gray-800 mt-2">{festival.description}</p>
//                 <a href={festival.link} className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                   Learn More
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Festival Categories */}
//       <section className="py-10 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Festival Categories</h2>
//           <div className="flex flex-wrap -mx-4">
//             {categories.map(category => (
//               <div key={category.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                 <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
//                   <img src={category.imageUrl} alt={category.name} className="w-full h-48 object-cover" />
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
//                     <p className="text-gray-700 mb-4">{category.description}</p>
//                     <a href={category.link} className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                       Explore {category.name}
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Festivals */}
//       <section className="py-10 bg-gray-100">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Featured Festivals</h2>
//           <div className="flex flex-wrap -mx-4">
//             {featuredFestivals.map(festival => (
//               <div key={festival.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                 <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//                   <img src={festival.imageUrl} alt={festival.name} className="w-full h-64 object-cover" />
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-2">{festival.name}</h3>
//                     <p className="text-gray-600 mb-2">{festival.date} - {festival.location}</p>
//                     <p className="text-gray-800 mb-4">{festival.description}</p>
//                     <a href={festival.ticketLink} className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
//                       Buy Tickets
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Special Offers */}
//       <section className="py-10 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Special Offers</h2>
//           <div className="flex flex-wrap -mx-4">
//             {specialOffers.map(offer => (
//               <div key={offer.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
//                 <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
//                   <img src={offer.imageUrl} alt={offer.title} className="w-full h-64 object-cover" />
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
//                     <p className="text-gray-800 mb-4">{offer.description}</p>
//                     <a href={offer.link} className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//                       Get Offer
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Subscribe to Newsletter */}
//       <section className="bg-gray-100 py-12">
//         <div className="container mx-auto px-6">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-800">
//             Subscribe to Our Newsletter
//           </h2>
//           <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter your email"
//               />
//               {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
//             >
//               {submitted ? 'Thank You!' : 'Subscribe'}
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-10">
//         <div className="container mx-auto px-4">
//           <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">What People Say</h2>
//           <div className="flex flex-col sm:flex-row sm:space-x-8">
//             {testimonials.map(testimonial => (
//               <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg mb-4 sm:mb-0 flex-shrink-0 w-full sm:w-1/3">
//                 <p className="text-gray-600 mb-4">{testimonial.message}</p>
//                 <p className="font-semibold">{testimonial.name}</p>
//                 <p className="text-gray-500">{testimonial.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section id="js-toolkit" className="container py-16">
//       <div className="pb-4 text-center">
//         <h2 className="text-orange">How to sell your event tickets online</h2>
//         <span className="text-lg text-blue-darker">
//           Promote, Sell and Manage any event, in any venue
//         </span>
//       </div>
//       <div className="flex items-center mb-8 -mx-4">
//         <div className="justify-end hidden w-1/6 px-4 md:flex">
//           <button
//             className="py-4 focus:outline-none"
//             aria-label="Previous"
//             onClick={() => setActive(active === 0 ? 3 : active - 1)}
//           >
//             <img
//               src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-left.svg"
//               alt=""
//               aria-hidden="true"
//             />
//           </button>
//         </div>
//         <button
//           className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
//             active === 0 ? "opacity-100" : ""
//           }`}
//           aria-label="Create"
//           onClick={() => setActive(0)}
//         >
//           <img
//             className="h-32"
//             src="https://cdn.ticketsource.co.uk/brochure-site/images/lightbulb.svg"
//             alt="A lightbulb"
//             loading="lazy"
//           />
//           <span className="md:mt-4">Create</span>
//         </button>
//         <button
//           className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
//             active === 1 ? "opacity-100" : ""
//           }`}
//           aria-label="Promote"
//           onClick={() => setActive(1)}
//         >
//           <img
//             className="h-32"
//             src="https://cdn.ticketsource.co.uk/brochure-site/images/megaphone.svg"
//             alt="A megaphone"
//             loading="lazy"
//           />
//           <span className="md:mt-4">Promote</span>
//         </button>
//         <button
//           className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
//             active === 2 ? "opacity-100" : ""
//           }`}
//           aria-label="Sell"
//           onClick={() => setActive(2)}
//         >
//           <img
//             className="h-32"
//             src="https://cdn.ticketsource.co.uk/brochure-site/images/ticket-blank.svg"
//             alt="A blank ticket"
//             loading="lazy"
//           />
//           <span className="md:mt-4">Sell</span>
//         </button>
//         <button
//           className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
//             active === 3 ? "opacity-100" : ""
//           }`}
//           aria-label="Manage"
//           onClick={() => setActive(3)}
//         >
//           <img
//             className="h-32"
//             src="https://cdn.ticketsource.co.uk/brochure-site/images/cog.svg"
//             alt="A cog"
//             loading="lazy"
//           />
//           <span className="md:mt-4">Manage</span>
//         </button>
//         <div className="hidden w-1/6 px-4 md:flex">
//           <button
//             className="py-4 focus:outline-none"
//             aria-label="Next"
//             onClick={() => setActive(active === 3 ? 0 : active + 1)}
//           >
//             <img
//               src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-right.svg"
//               alt=""
//               aria-hidden="true"
//               loading="lazy"
//             />
//           </button>
//         </div>
//       </div>
//       {active === 0 && (
//         <div className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16">
//           <div className="flex justify-around md:flex-1">
//             <img
//               className="min-w-0 max-h-112"
//               src="https://cdn.ticketsource.co.uk/brochure-site/images/seating-plan.png"
//               alt="Seating plan and listing"
//               loading="lazy"
//             />
//           </div>
//           <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
//             <h3 className="text-xl font-normal text-blue-darker">
//               Create and customise your event
//             </h3>
//             <p>
//               Set up listings and an online box office for any event in any
//               venue in minutes. Whether you offer allocated seating or general
//               admission tickets, our free, easy to use ticketing system gives
//               you complete control of all aspects of your event listings online
//               24/7.
//             </p>
//             <ul className="orange-list">
//               <li>List your event online for free in minutes</li>
//               <li>Customise your ticket shop with your own logo and colours</li>
//               <li>Use our interactive venue seating plan designer</li>
//               <li>Manage multiple account users with access permissions</li>
//             </ul>
//             <a href="/signup" className="btn btn-orange">
//               Start creating
//             </a>
//           </div>
//         </div>
//       )}
//       {active === 1 && (
//         <div
//           className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
//           style={{ display: active === 1 ? "flex" : "none" }}
//         >
//           <div className="flex justify-around md:flex-1">
//             <img
//               className="min-w-0 max-h-112"
//               src="https://cdn.ticketsource.co.uk/brochure-site/images/mobile-listing-mailchimp-brevo.png"
//               alt="Two mobile phones with event listings, Mailchimp and Brevo"
//               loading="lazy"
//             />
//           </div>
//           <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
//             <h3 className="text-xl font-normal text-blue-darker">
//               Publish and promote your event
//             </h3>
//             <p>
//               TicketSource is packed with tools to make the most of your digital
//               marketing opportunities. Take advantage of our automated social
//               media sharing, early bird price categories, unlimited discount
//               codes, MailChimp and Brevo (formerly Sendinblue) integration and
//               customer referral reports.
//             </p>
//             <ul className="orange-list">
//               <li>Promote your event with <span>book now</span>links</li>
//               <li>Use our Facebook app for better social media promotion</li>
//               <li>Integrate MailChimp or Brevo for easier email marketing</li>
//               <li>
//                 Utilise unlimited price categories and promo discount codes
//               </li>
//             </ul>
//             <a href="/signup" className="btn btn-orange">
//               Start promoting
//             </a>
//           </div>
//         </div>
//       )}
//       {active === 2 && (
//         <div
//           className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
//           style={{ display: active === 2 ? "flex" : "none" }}
//         >
//           <div className="flex justify-around md:flex-1">
//             <img
//               className="min-w-0 max-h-112"
//               src="https://cdn.ticketsource.co.uk/brochure-site/images/responsive-listings.png"
//               alt="Listings pages on desktop and mobile"
//               loading="lazy"
//             />
//           </div>
//           <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
//             <h3 className="text-xl font-normal text-blue-darker">
//               Start selling tickets online
//             </h3>
//             <p>
//               Our free event ticketing platform enables you to sell tickets
//               online and record payments in person with a range of ticket
//               formats available. A single inventory seamlessly integrates your
//               online and in-house ticketing, so overbooking becomes impossible.
//             </p>
//             <ul className="orange-list">
//               <li>Easily embed TicketSource in your site or Facebook page</li>
//               <li>Record in-house bookings for face-to-face payments</li>
//               <li>Produce etickets, mobile tickets and thermal tickets</li>
//               <li>Outsource your telephone bookings to our in-house team</li>
//             </ul>
//             <a href="/signup" className="btn btn-orange">
//               Start selling
//             </a>
//           </div>
//         </div>
//       )}
//       {active === 3 && (
//         <div
//           className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
//           style={{ display: active === 3 ? "flex" : "none" }}
//         >
//           <div className="flex justify-around md:flex-1">
//             <img
//               className="min-w-0 max-h-112"
//               src="https://cdn.ticketsource.co.uk/brochure-site/images/mobile-scanning-ticket.png"
//               alt="A mobile phone scanning a ticket qr code"
//               loading="lazy"
//             />
//           </div>
//           <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
//             <h3 className="text-xl font-normal text-blue-darker">
//               Manage your audience
//             </h3>
//             <p>
//               Whether you just want a printed guest list or prefer to automate
//               ticket validation with barcode scanners, we offer a range of
//               registration and audience management solutions, as well as reports
//               to simplify your accounting and venue management.
//             </p>
//             <ul className="orange-list">
//               <li>Print a door list or use scanners for ticket validation</li>
//               <li>Ticket scanning app for iOS and Android devices</li>
//               <li>Track conversions with Google Analytics integration</li>
//               <li>Analysis of income in sales reports for easy accounting</li>
//             </ul>
//             <a href="/signup" className="btn btn-orange">
//               Start managing
//             </a>
//           </div>
//         </div>
//       )}
//       <div className="flex md:hidden justify-evenly">
//         <button
//           className="py-4 focus:outline-none"
//           aria-label="Previous"
//           onClick={() => setActive(active === 0 ? 3 : active - 1)}
//         >
//           <img
//             src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-left.svg"
//             alt=""
//             aria-hidden="true"
//             loading="lazy"
//           />
//         </button>
//         <button
//           className="py-4 focus:outline-none"
//           aria-label="Next"
//           onClick={() => setActive(active === 3 ? 0 : active + 1)}
//         >
//           <img
//             src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-right.svg"
//             alt=""
//             aria-hidden="true"
//             loading="lazy"
//           />
//         </button>
//       </div>
//     </section>
//     <Footer/>
//     </div>
//   );
// 
