import React, { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Simple email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    try {
      const response = await axios.post(

        'https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/emails.json',

        { email }
      );

      if (response.status !== 200) {
        throw new Error("Network response was not ok.");
      }

      setEmail("");
      setSubmitted(true);
    } catch (error) {
      setError("There was an issue with the submission. Please try again.");
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      image: "./src/assets/img/slide-1.png",
      title: "Welcome to the Jordan Culture Festival",
      description:
        "Experience the vibrant culture and traditions of Jordan through our exciting festival events.",
      btn: "Learn More",
    },
    {
      id: 2,
      image: "./src/assets/img/image-3.png",
      title: "Get Your Tickets Now",
      description:
        "Don’t miss out on our exclusive performances, workshops, and more. Buy your tickets today!",
      btn: "Buy Tickets",
    },
    {
      id: 3,
      image: "./src/assets/img/image-2.png",
      title: "Join Us for an Unforgettable Experience",
      description:
        "Celebrate with us and immerse yourself in the rich heritage of Jordan.",
      btn: "Explore Events",
    },
  ];

  const festivalData = {
    festivals: [
      {
        id: 1,
        name: "Jordanian Cultural Festival",
        date: "August 12, 2024",
        location: "Amman",
        description:
          "Experience the rich cultural heritage of Jordan with traditional music, dance, and food.",
        link: "/festivals/jordanian-cultural-festival",
      },
      {
        id: 2,
        name: "Petra Arts Festival",
        date: "September 5, 2024",
        location: "Petra",
        description:
          "Join us for a celebration of arts and crafts amidst the ancient ruins of Petra.",
        link: "/festivals/petra-arts-festival",
      },
      {
        id: 3,
        name: "Jerash Music Fest",
        date: "October 10, 2024",
        location: "Jerash",
        description:
          "Enjoy a weekend of music performances in the historical city of Jerash.",
        link: "/festivals/jerash-music-fest",
      },
    ],
    categories: [
      {
        id: 1,
        name: "Music",
        description:
          "Explore a variety of music festivals featuring local and international artists.",
        link: "/categories/music",
        imageUrl: "https://via.placeholder.com/300x200?text=Music+Festivals",
      },
      {
        id: 2,
        name: "Food",
        description:
          "Discover food festivals showcasing Jordanian and international cuisines.",
        link: "/categories/food",
        imageUrl: "https://via.placeholder.com/300x200?text=Food+Festivals",
      },
      {
        id: 3,
        name: "Art",
        description:
          "Immerse yourself in art festivals with exhibitions, workshops, and live performances.",
        link: "/categories/art",
        imageUrl: "https://via.placeholder.com/300x200?text=Art+Festivals",
      },
    ],
    featuredFestivals: [
      {
        id: 1,
        name: "Jerash Festival of Culture and Arts",
        date: "August 20 - August 30, 2024",
        location: "Jerash",
        description:
          "One of the most famous festivals in Jordan, featuring a mix of music, dance, and cultural performances in the ancient city of Jerash.",
        imageUrl: "https://via.placeholder.com/600x400?text=Jerash+Festival",
        ticketLink: "/tickets/jerash-festival",
      },
      {
        id: 2,
        name: "Amman Summer Festival",
        date: "July 15 - August 5, 2024",
        location: "Amman",
        description:
          "A vibrant festival held in Amman showcasing local and international artists, street performances, and food stalls.",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Amman+Summer+Festival",
        ticketLink: "/tickets/amman-summer-festival",
      },
      {
        id: 3,
        name: "Petra International Music Festival",
        date: "September 10 - September 15, 2024",
        location: "Petra",
        description:
          "Enjoy classical and contemporary music performances in the stunning setting of Petra, one of the world’s wonders.",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Petra+Music+Festival",
        ticketLink: "/tickets/petra-music-festival",
      },
    ],
    specialOffers: [
      {
        id: 1,
        title: "Early-Bird Discount",
        description:
          "Get 20% off on tickets purchased before July 31, 2024. Limited time offer!",
        imageUrl:
          "https://via.placeholder.com/600x400?text=Early-Bird+Discount",
        link: "/specials/early-bird-discount",
      },
      {
        id: 2,
        title: "Family Package",
        description:
          "Buy 4 tickets and get 1 free! Perfect for a family outing to the Amman Summer Festival.",
        imageUrl: "https://via.placeholder.com/600x400?text=Family+Package",
        link: "/specials/family-package",
      },
      {
        id: 3,
        title: "VIP Experience",
        description:
          "Upgrade to a VIP pass for exclusive access to backstage areas and premium seating.",
        imageUrl: "https://via.placeholder.com/600x400?text=VIP+Experience",
        link: "/specials/vip-experience",
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO at Company",
      image: "https://via.placeholder.com/150",
      testimonial:
        "This is an amazing service! It has greatly improved our productivity and efficiency. Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Marketing Manager",
      image: "https://via.placeholder.com/150",
      testimonial:
        "Incredible experience. The support team is fantastic, and the results speak for themselves.",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Product Designer",
      image: "https://via.placeholder.com/150",
      testimonial:
        "A game-changer for our business. Easy to use and integrates seamlessly with our workflow.",
    },
  ];

  return (
    <div className=" mx-auto p-4 bg-page">
      <div className="slider-hero mb-8 mx-4 sm:mx-8">
        <Slider {...sliderSettings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative rounded-xl overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6">
                <h2 className="text-2xl sm:text-4xl font-bold mb-4 text-red-500">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-lg mb-6">{slide.description}</p>
                <button className="bg-red-500 text-white py-2 px-4 sm:py-2 sm:px-6 rounded-lg hover:bg-red-600 transition duration-300">
                  {slide.btn}
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center md:flex md:items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8">
                Why Festivals Matter
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Festivals bring people together, celebrating the diverse and
                rich cultural heritage of Jordan. They offer a unique
                opportunity to experience the country's traditions, music,
                dance, and food. Join us in celebrating and preserving these
                traditions for future generations.
              </p>
              <a
                href="#about"
                className="bg-red-500 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg hover:bg-red-600 transition duration-300"
              >
                Learn More
              </a>
            </div>
            <div className="md:w-1/2">
              <img
                src="./src/assets/img/joflag.png"
                alt="Festival Image"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
            Explore Festivals by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {festivalData.categories.map((category) => (
              <div
                key={category.id}
                className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm mb-4">{category.description}</p>
                  <a
                    href={category.link}
                    className="bg-red-500 py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    View Category
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
            Upcoming Festivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {festivalData.festivals.map((festival) => (
              <div
                key={festival.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-red-600">
                    {festival.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{festival.date}</p>
                  <p className="text-gray-600 mb-4">{festival.location}</p>
                  <p className="text-gray-600 mb-4">{festival.description}</p>
                  <a
                    href={festival.link}
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
            Special Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {festivalData.specialOffers.map((offer) => (
              <div
                key={offer.id}
                className="relative group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={offer.imageUrl}
                  alt={offer.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white p-6 opacity-0 group-hover:opacity-100 transition duration-300">
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-sm mb-4">{offer.description}</p>
                  <a
                    href={offer.link}
                    className="bg-red-500 py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    View Offer
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-12">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
              >
                <div className="p-6 text-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-red-600"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-red-600">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2 italic">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-700 mb-4">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg mb-6">
            Sign up for our newsletter to receive the latest news and updates
            about upcoming festivals and events.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-white text-red-600 py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
              >
                Subscribe
              </button>
            </div>
            {error && <p className="text-red-300 mb-4">{error}</p>}
            {submitted && (
              <p className="text-green-300 mb-4">Thank you for subscribing!</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
