
import { useState, useEffect } from "react";
import axios from 'axios';

const Details = () => {
  const [event, setEvent] = useState(null);
  const [tichOrg, setTickOrg] = useState(0); 
  const [tichVip, setTickVip] = useState(0); 
  const [tichOrgCount, setTickOrgCount] = useState(0); 
  const [tichVipCount, setTickVipCount] = useState(0); 

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get("https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/events/event_id_25.json");
        
        if (response.data) {
          const eventData = response.data;
          setEvent(eventData);
          
          // Set ticket availability state
          if (eventData.tickets && eventData.tickets.ticket_id_49) {
            setTickOrg(eventData.tickets.ticket_id_49.availability);
          }
          if (eventData.tickets && eventData.tickets.ticket_id_50) {
            setTickVip(eventData.tickets.ticket_id_50.availability);
          }
        } else {
          console.log("No data available");
        }
      } catch (error) {
        alert(error.message);
      }
    };

    fetchEventDetails();

  }, []); 

  const decrementOrginal = () => {
    if (tichOrg > 0) {
      setTickOrg(tichOrg - 1); // Decrease ticket availability by 1

      axios.patch("https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/events/event_id_25/tickets/ticket_id_49.json", { availability: tichOrg - 1 });
    }
  };

  const decrementVip = () => {
    if (tichVip > 0) {
      setTickVip(tichVip - 1); // Decrease ticket availability by 1

      axios.patch("https://culture-festival-new-default-rtdb.europe-west1.firebasedatabase.app/events/event_id_25/tickets/ticket_id_50.json", { availability: tichVip - 1 });
    }
  };

  return (
    <div>
      {event && (
        <div>
          <h2 className="text-xl font-bold mb-2">{event.title}</h2>
          <p className="text-gray-700">Category: {event.category}</p>
          <p className="text-gray-700">Description: {event.description}</p>
          <p className="text-gray-700">Date: {event.date}</p>
          <p className="text-gray-700">City: {event.city}</p>

          {/* Google Maps iframe */}
          <iframe
            width="100%"
            height="400"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
            title="Event Location"
          >
            <a href={`https://www.google.com/maps?q=${encodeURIComponent(event.city)}+(culture)`}>View on Google Maps</a>
          </iframe>

          {/* Ticket counters */}
          <div>
            <button onClick={() => setTickOrgCount(tichOrgCount + 1)}>+</button>
            <button onClick={() => setTickOrgCount(tichOrgCount - 1)}>-</button>
            {tichOrgCount}
          </div>
          <div>
            <button onClick={() => setTickVipCount(tichVipCount + 1)}>+</button>
            <button onClick={() => setTickVipCount(tichVipCount - 1)}>-</button>
            {tichVipCount}
          </div>

          {/* Render ticket details */}
          {event.tickets && (
            <div>
              {/* Render details for ticket_id_49 */}
              {event.tickets.ticket_id_49 && (
                <div>
                  <p className="text-gray-700">Ticket 49 Availability: {tichOrg}</p>
                  <button 
                    onClick={decrementOrginal} 
                    className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
                  >
                    Decrement Original
                  </button>
                  <img src={event.tickets.ticket_id_49.image} alt="Ticket 49" className="ticket-image" />
                  <p className="text-gray-700">Ticket 49 Type: {event.tickets.ticket_id_49.type}</p>
                  <p className="text-gray-700">Ticket 49 Price: {event.tickets.ticket_id_49.price}</p>
                </div>
              )}

              {/* Render details for ticket_id_50 */}
              {event.tickets.ticket_id_50 && (
                <div>
                  <p className="text-gray-700">Ticket 50 Availability: {tichVip}</p>
                  <button 
                    onClick={decrementVip} 
                    className="px-6 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition duration-300"
                  >
                    Decrement VIP
                  </button>
                  <img src={event.tickets.ticket_id_50.image} alt="Ticket 50" className="ticket-image" />
                  <p className="text-gray-700">Ticket 50 Type: {event.tickets.ticket_id_50.type}</p>
                  <p className="text-gray-700">Ticket 50 Price: {event.tickets.ticket_id_50.price}</p>
                </div>
              )}
            </div>
          )}

          {/* Event image */}
          {event.image && (
            <div>
              <img src={event.image} alt="Event" className="event-image" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Details;


