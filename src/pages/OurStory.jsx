import React, { useState } from "react";

const OurStory = () => {
  const [active, setActive] = useState(0);

  return (
    // <section id="js-toolkit" className="container py-16">
    //   <div className="pb-4 text-center">
    //     <h2 className="text-orange">How to sell your event tickets online</h2>
    //     <span className="text-lg text-blue-darker">
    //       Promote, Sell and Manage any event, in any venue
    //     </span>
    //   </div>
    //   <div className="flex items-center mb-8 -mx-4">
    //     <div className="justify-end hidden w-1/6 px-4 md:flex">
    //       <button
    //         className="py-4 focus:outline-none"
    //         aria-label="Previous"
    //         onClick={() => setActive(active === 0 ? 3 : active - 1)}
    //       >
    //         <img
    //           src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-left.svg"
    //           alt=""
    //           aria-hidden="true"
    //         />
    //       </button>
    //     </div>
    //     <button
    //       className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
    //         active === 0 ? "opacity-100" : ""
    //       }`}
    //       aria-label="Create"
    //       onClick={() => setActive(0)}
    //     >
    //       <img
    //         className="h-32"
    //         src="https://cdn.ticketsource.co.uk/brochure-site/images/lightbulb.svg"
    //         alt="A lightbulb"
    //         loading="lazy"
    //       />
    //       <span className="md:mt-4">Create</span>
    //     </button>
    //     <button
    //       className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
    //         active === 1 ? "opacity-100" : ""
    //       }`}
    //       aria-label="Promote"
    //       onClick={() => setActive(1)}
    //     >
    //       <img
    //         className="h-32"
    //         src="https://cdn.ticketsource.co.uk/brochure-site/images/megaphone.svg"
    //         alt="A megaphone"
    //         loading="lazy"
    //       />
    //       <span className="md:mt-4">Promote</span>
    //     </button>
    //     <button
    //       className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
    //         active === 2 ? "opacity-100" : ""
    //       }`}
    //       aria-label="Sell"
    //       onClick={() => setActive(2)}
    //     >
    //       <img
    //         className="h-32"
    //         src="https://cdn.ticketsource.co.uk/brochure-site/images/ticket-blank.svg"
    //         alt="A blank ticket"
    //         loading="lazy"
    //       />
    //       <span className="md:mt-4">Sell</span>
    //     </button>
    //     <button
    //       className={`flex flex-col items-center w-1/4 px-4 text-lg font-normal opacity-50 md:w-1/6 text-blue-darker focus:outline-none ${
    //         active === 3 ? "opacity-100" : ""
    //       }`}
    //       aria-label="Manage"
    //       onClick={() => setActive(3)}
    //     >
    //       <img
    //         className="h-32"
    //         src="https://cdn.ticketsource.co.uk/brochure-site/images/cog.svg"
    //         alt="A cog"
    //         loading="lazy"
    //       />
    //       <span className="md:mt-4">Manage</span>
    //     </button>
    //     <div className="hidden w-1/6 px-4 md:flex">
    //       <button
    //         className="py-4 focus:outline-none"
    //         aria-label="Next"
    //         onClick={() => setActive(active === 3 ? 0 : active + 1)}
    //       >
    //         <img
    //           src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-right.svg"
    //           alt=""
    //           aria-hidden="true"
    //           loading="lazy"
    //         />
    //       </button>
    //     </div>
    //   </div>
    //   {active === 0 && (
    //     <div className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16">
    //       <div className="flex justify-around md:flex-1">
    //         <img
    //           className="min-w-0 max-h-112"
    //           src="https://cdn.ticketsource.co.uk/brochure-site/images/seating-plan.png"
    //           alt="Seating plan and listing"
    //           loading="lazy"
    //         />
    //       </div>
    //       <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
    //         <h3 className="text-xl font-normal text-blue-darker">
    //           Create and customise your event
    //         </h3>
    //         <p>
    //           Set up listings and an online box office for any event in any
    //           venue in minutes. Whether you offer allocated seating or general
    //           admission tickets, our free, easy to use ticketing system gives
    //           you complete control of all aspects of your event listings online
    //           24/7.
    //         </p>
    //         <ul className="orange-list">
    //           <li>List your event online for free in minutes</li>
    //           <li>Customise your ticket shop with your own logo and colours</li>
    //           <li>Use our interactive venue seating plan designer</li>
    //           <li>Manage multiple account users with access permissions</li>
    //         </ul>
    //         <a href="/signup" className="btn btn-orange">
    //           Start creating
    //         </a>
    //       </div>
    //     </div>
    //   )}
    //   {active === 1 && (
    //     <div
    //       className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
    //       style={{ display: active === 1 ? "flex" : "none" }}
    //     >
    //       <div className="flex justify-around md:flex-1">
    //         <img
    //           className="min-w-0 max-h-112"
    //           src="https://cdn.ticketsource.co.uk/brochure-site/images/mobile-listing-mailchimp-brevo.png"
    //           alt="Two mobile phones with event listings, Mailchimp and Brevo"
    //           loading="lazy"
    //         />
    //       </div>
    //       <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
    //         <h3 className="text-xl font-normal text-blue-darker">
    //           Publish and promote your event
    //         </h3>
    //         <p>
    //           TicketSource is packed with tools to make the most of your digital
    //           marketing opportunities. Take advantage of our automated social
    //           media sharing, early bird price categories, unlimited discount
    //           codes, MailChimp and Brevo (formerly Sendinblue) integration and
    //           customer referral reports.
    //         </p>
    //         <ul className="orange-list">
    //           <li>Promote your event with "book now" links</li>
    //           <li>Use our Facebook app for better social media promotion</li>
    //           <li>Integrate MailChimp or Brevo for easier email marketing</li>
    //           <li>
    //             Utilise unlimited price categories and promo discount codes
    //           </li>
    //         </ul>
    //         <a href="/signup" className="btn btn-orange">
    //           Start promoting
    //         </a>
    //       </div>
    //     </div>
    //   )}
    //   {active === 2 && (
    //     <div
    //       className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
    //       style={{ display: active === 2 ? "flex" : "none" }}
    //     >
    //       <div className="flex justify-around md:flex-1">
    //         <img
    //           className="min-w-0 max-h-112"
    //           src="https://cdn.ticketsource.co.uk/brochure-site/images/responsive-listings.png"
    //           alt="Listings pages on desktop and mobile"
    //           loading="lazy"
    //         />
    //       </div>
    //       <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
    //         <h3 className="text-xl font-normal text-blue-darker">
    //           Start selling tickets online
    //         </h3>
    //         <p>
    //           Our free event ticketing platform enables you to sell tickets
    //           online and record payments in person with a range of ticket
    //           formats available. A single inventory seamlessly integrates your
    //           online and in-house ticketing, so overbooking becomes impossible.
    //         </p>
    //         <ul className="orange-list">
    //           <li>Easily embed TicketSource in your site or Facebook page</li>
    //           <li>Record in-house bookings for face-to-face payments</li>
    //           <li>Produce etickets, mobile tickets and thermal tickets</li>
    //           <li>Outsource your telephone bookings to our in-house team</li>
    //         </ul>
    //         <a href="/signup" className="btn btn-orange">
    //           Start selling
    //         </a>
    //       </div>
    //     </div>
    //   )}
    //   {active === 3 && (
    //     <div
    //       className="flex flex-col items-center mb-4 space-y-4 md:flex-row md:space-x-16"
    //       style={{ display: active === 3 ? "flex" : "none" }}
    //     >
    //       <div className="flex justify-around md:flex-1">
    //         <img
    //           className="min-w-0 max-h-112"
    //           src="https://cdn.ticketsource.co.uk/brochure-site/images/mobile-scanning-ticket.png"
    //           alt="A mobile phone scanning a ticket qr code"
    //           loading="lazy"
    //         />
    //       </div>
    //       <div className="flex flex-col space-y-4 md:flex-1 md:items-start">
    //         <h3 className="text-xl font-normal text-blue-darker">
    //           Manage your audience
    //         </h3>
    //         <p>
    //           Whether you just want a printed guest list or prefer to automate
    //           ticket validation with barcode scanners, we offer a range of
    //           registration and audience management solutions, as well as reports
    //           to simplify your accounting and venue management.
    //         </p>
    //         <ul className="orange-list">
    //           <li>Print a door list or use scanners for ticket validation</li>
    //           <li>Ticket scanning app for iOS and Android devices</li>
    //           <li>Track conversions with Google Analytics integration</li>
    //           <li>Analysis of income in sales reports for easy accounting</li>
    //         </ul>
    //         <a href="/signup" className="btn btn-orange">
    //           Start managing
    //         </a>
    //       </div>
    //     </div>
    //   )}
    //   <div className="flex md:hidden justify-evenly">
    //     <button
    //       className="py-4 focus:outline-none"
    //       aria-label="Previous"
    //       onClick={() => setActive(active === 0 ? 3 : active - 1)}
    //     >
    //       <img
    //         src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-left.svg"
    //         alt=""
    //         aria-hidden="true"
    //         loading="lazy"
    //       />
    //     </button>
    //     <button
    //       className="py-4 focus:outline-none"
    //       aria-label="Next"
    //       onClick={() => setActive(active === 3 ? 0 : active + 1)}
    //     >
    //       <img
    //         src="https://cdn.ticketsource.co.uk/brochure-site/images/arrow-right.svg"
    //         alt=""
    //         aria-hidden="true"
    //         loading="lazy"
    //       />
    //     </button>
    //   </div>
    // </section>
<></>
  );
};

export default OurStory;