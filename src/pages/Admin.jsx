// import React, { useState } from "react";
// import {
//   BarChart,
//   Bar,
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";
// import {
//   PlusCircle,
//   Users,
//   Package,
//   Calendar,
//   Search,
//   Edit,
//   Trash2,
//   Check,
// } from "lucide-react";
// // import { Alert, AlertDescription } from "@mui/material/Alert";
// import getData from "../hooks/getData";
// import deletePostData from "../hooks/deleteData";
// import updatePostData from "../hooks/updateData";
// const salesData = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
//   { name: "Mar", sales: 5000 },
//   { name: "Apr", sales: 4500 },
//   { name: "May", sales: 6000 },
//   { name: "Jun", sales: 5500 },
// ];

// const customerActivityData = [
//   { name: "Week 1", active: 500 },
//   { name: "Week 2", active: 700 },
//   { name: "Week 3", active: 600 },
//   { name: "Week 4", active: 800 },
// ];

// const mockEvents = [
//   {
//     id: 1,
//     name: "Summer Music Festival",
//     date: "2024-07-15",
//     ticketsAvailable: 5000,
//   },
//   {
//     id: 2,
//     name: "Tech Conference 2024",
//     date: "2024-09-22",
//     ticketsAvailable: 2000,
//   },
//   {
//     id: 3,
//     name: "Food & Wine Expo",
//     date: "2024-10-05",
//     ticketsAvailable: 3000,
//   },
// ];

// const Admin = () => {
//   const [activeTab, setActiveTab] = useState("overview");
//   // const [events] = getData(
//   //   "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/events.json"
//   // );
//   const [events, setEvents] = useState(mockEvents);

//   const [newEventName, setNewEventName] = useState("");
//   const [newEventDate, setNewEventDate] = useState("");
//   const [newEventTickets, setNewEventTickets] = useState("");
//   const [showAddEventForm, setShowAddEventForm] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   let [customers] = getData(
//     "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json"
//   );
//   const [data, postData] = updatePostData();

//   const activeToggle = (id, status) => {
//     const url = `https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${id}.json`;

//     if (status) {
//       postData(url, { active: false });
//     } else {
//       postData(url, { active: true });
//     }
//   };
//   const [deleteData, deleteDataFun] = deletePostData();

//   const handleDeleteEvent = id => {
//     const url = `https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${id}.json`;
//     deleteDataFun(url);
//   };

//   const handleAddEvent = e => {
//     e.preventDefault();
//     const newEvent = {
//       id: events.length + 1,
//       name: newEventName,
//       date: newEventDate,
//       ticketsAvailable: parseInt(newEventTickets),
//     };
//     setEvents([...events, newEvent]);
//     setNewEventName("");
//     setNewEventDate("");
//     setNewEventTickets("");
//     setShowAddEventForm(false);
//   };

//   const filteredCustomers = customers.filter(
//     customer =>
//       customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       customer.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6">Event Management Dashboard</h1>

//       {/* Navigation */}
//       <nav className="flex mb-6">
//         <button
//           onClick={() => setActiveTab("overview")}
//           className={`mr-4 px-4 py-2 rounded ${
//             activeTab === "overview" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Overview
//         </button>
//         <button
//           onClick={() => setActiveTab("events")}
//           className={`mr-4 px-4 py-2 rounded ${
//             activeTab === "events" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Event Management
//         </button>
//         <button
//           onClick={() => setActiveTab("customers")}
//           className={`mr-4 px-4 py-2 rounded ${
//             activeTab === "customers" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Customer Management
//         </button>
//         <button
//           onClick={() => setActiveTab("inventory")}
//           className={`px-4 py-2 rounded ${
//             activeTab === "inventory" ? "bg-blue-500 text-white" : "bg-gray-200"
//           }`}
//         >
//           Inventory Management
//         </button>
//       </nav>

//       {/* Content */}
//       <div className="bg-white shadow rounded-lg p-6">
//         {activeTab === "overview" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Overview</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//               <div className="bg-blue-100 p-4 rounded">
//                 <h3 className="font-semibold">Total Sales</h3>
//                 <p className="text-2xl">$24,500</p>
//               </div>
//               <div className="bg-green-100 p-4 rounded">
//                 <h3 className="font-semibold">Active Customers</h3>
//                 <p className="text-2xl">1,234</p>
//               </div>
//               <div className="bg-yellow-100 p-4 rounded">
//                 <h3 className="font-semibold">Upcoming Events</h3>
//                 <p className="text-2xl">{events.length}</p>
//               </div>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <h3 className="font-semibold mb-2">Monthly Sales</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <BarChart data={salesData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Bar dataKey="sales" fill="#8884d8" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>
//               <div>
//                 <h3 className="font-semibold mb-2">Customer Activity</h3>
//                 <ResponsiveContainer width="100%" height={300}>
//                   <LineChart data={customerActivityData}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="active" stroke="#82ca9d" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === "events" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Event Management</h2>
//             <button
//               onClick={() => setShowAddEventForm(!showAddEventForm)}
//               className="bg-green-500 text-white px-4 py-2 rounded flex items-center mb-4"
//             >
//               <PlusCircle className="mr-2" />
//               {showAddEventForm ? "Cancel" : "Add New Event"}
//             </button>

//             {showAddEventForm && (
//               <form onSubmit={handleAddEvent} className="mb-4">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   <input
//                     type="text"
//                     placeholder="Event Name"
//                     value={newEventName}
//                     onChange={e => setNewEventName(e.target.value)}
//                     className="border p-2 rounded"
//                     required
//                   />
//                   <input
//                     type="date"
//                     value={newEventDate}
//                     onChange={e => setNewEventDate(e.target.value)}
//                     className="border p-2 rounded"
//                     required
//                   />
//                   <input
//                     type="number"
//                     placeholder="Available Tickets"
//                     value={newEventTickets}
//                     onChange={e => setNewEventTickets(e.target.value)}
//                     className="border p-2 rounded"
//                     required
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
//                 >
//                   Add Event
//                 </button>
//               </form>
//             )}

//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2 text-left">Event Name</th>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Available Tickets</th>
//                   <th className="p-2 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {events.map(event => (
//                   <tr key={event.id} className="border-b">
//                     <td className="p-2">{event.name}</td>
//                     <td className="p-2">{event.date}</td>
//                     <td className="p-2">
//                       {/* {event.tickets[Object.keys(event.tickets)[0]]
//                         .availability +
//                         event.tickets[Object.keys(event.tickets)[1]]
//                           .availability} */}
//                     </td>
//                     <td className="p-2">
//                       <button className="mr-2 text-blue-500">
//                         <Edit size={18} />
//                       </button>
//                       <button
//                         onClick={() => handleDeleteEvent(event.id)}
//                         className="text-red-500"
//                       >
//                         <Trash2 size={18} />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeTab === "customers" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Customer Management</h2>
//             <div className="flex items-center mb-4">
//               <Users className="mr-2" />
//               <span>Total Customers: {customers.length}</span>
//             </div>
//             <div className="mb-4">
//               <div className="relative">
//                 <input
//                   type="text"
//                   placeholder="Search customers..."
//                   value={searchTerm}
//                   onChange={e => setSearchTerm(e.target.value)}
//                   className="w-full border p-2 pl-10 rounded"
//                 />
//                 <Search
//                   className="absolute left-3 top-2.5 text-gray-400"
//                   size={20}
//                 />
//               </div>
//             </div>
//             <table className="w-full">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2 text-left">Name</th>
//                   <th className="p-2 text-left">Email</th>
//                   <th className="p-2 text-left">Total Purchases</th>
//                   <th className="p-2 text-left">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredCustomers.map(customer => (
//                   <tr key={customer.id} className="border-b">
//                     <td className="p-2">{customer.name}</td>
//                     <td className="p-2">{customer.email}</td>
//                     <td className="p-2">{20}</td>
//                     <td className="p-2 grid grid-cols-[50px_20px_50px] gap-6">
//                       <h1
//                         className={`${
//                           customer.active ? "text-green-500" : "text-red-500"
//                         }`}
//                       >
//                         {customer.active ? "Active" : "Inactive"}
//                       </h1>
//                       <button className="mr-2 text-blue-500">
//                         <Edit
//                           size={18}
//                           onClick={() =>
//                             activeToggle(customer.key, customer.active)
//                           }
//                         />
//                       </button>
//                       <button className="text-red-500">
//                         <Trash2
//                           size={18}
//                           onClick={() => handleDeleteEvent(customer.key)}
//                         />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//         {activeTab === "inventory" && (
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Inventory Management</h2>
//             <div className="flex items-center mb-4">
//               <Package className="mr-2" />
//               <span>
//                 Total Available Tickets:
//                 {events.reduce((sum, event) => sum + event.ticketsAvailable, 0)}
//               </span>
//             </div>
//             {/* <Alert>
//               <AlertDescription>
//                 Low ticket alert: "Tech Conference 2024" has less than 500
//                 tickets available.
//               </AlertDescription>
//             </Alert> */}
//             <table className="w-full mt-4">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2 text-left">Event Name</th>
//                   <th className="p-2 text-left">Date</th>
//                   <th className="p-2 text-left">Available Tickets</th>
//                   <th className="p-2 text-left">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {events.map(event => (
//                   <tr key={event.id} className="border-b">
//                     <td className="p-2">{event.name}</td>
//                     <td className="p-2">{event.date}</td>
//                     <td className="p-2">{event.ticketsAvailable}</td>
//                     <td className="p-2">
//                       <button className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
//                         Update Stock
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Admin;

import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  PlusCircle,
  Users,
  Package,
  Calendar,
  Search,
  Edit,
  Trash2,
} from "lucide-react";
import getData from "../hooks/getData";
//  import usePostData from "../hooks/postData";
import axios from "axios";
import deletePostData from "../hooks/deleteData";
import updatePostData from "../hooks/updateData";
// Mock data
const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
  { name: "Apr", sales: 4500 },
  { name: "May", sales: 6000 },
  { name: "Jun", sales: 5500 },
];

const customerActivityData = [
  { name: "Week 1", active: 500 },
  { name: "Week 2", active: 700 },
  { name: "Week 3", active: 600 },
  { name: "Week 4", active: 800 },
];

const mockEvents = [
  {
    id: 1,
    name: "Summer Music Festival",
    date: "2024-07-15",
    ticketsAvailable: 5000,
  },
  {
    id: 2,
    name: "Tech Conference 2024",
    date: "2024-09-22",
    ticketsAvailable: 2000,
  },
  {
    id: 3,
    name: "Food & Wine Expo",
    date: "2024-10-05",
    ticketsAvailable: 3000,
  },
];

const mockCustomers = [
  { id: 1, name: "John Doe", email: "john@example.com", totalPurchases: 3 },
  { id: 2, name: "Jane Smith", email: "jane@example.com", totalPurchases: 5 },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", totalPurchases: 2 },
];

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [events] = getData(
    "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/events.json"
  );
  const [messages, setMessage] = getData(
    "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/messages.json"
  );
  let [customers] = getData(
    "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers.json"
  );
  const [newEventName, setNewEventName] = useState("");
  const [newEventDate, setNewEventDate] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const [newEventTickets, setNewEventTickets] = useState("");
  const [showAddEventForm, setShowAddEventForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");



  const handleAddEvent = async e => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      title: newEventName,
      date: newEventDate,
      ticketsAvailable: parseInt(newEventTickets),
      isDeleted: false,
    };
    try {
      const response = await axios.post(
        "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/events.json",
        newEvent
      );
      if (response.status === 200) {
        alert("Data saved successfully");
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
    console.log(newEvent.name);
  };

  const [data, postData] = updatePostData();

  const activeToggle = (id, status) => {
    const url = `https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${id}.json`;

    if (status) {
      postData(url, { active: false });
    } else {
      postData(url, { active: true });
    }
  };
  // const [deleteData, deleteDataFun] = deletePostData();
  //   const handleDeleteEvent = id => {
  //     const url = `https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers/${id}.json`;
  //     deleteDataFun(url);
  //   };

  const [deleteData, deleteDataFun] = deletePostData();

  const handleDeleteEvent = (id, url) => {
    const urlVar = `${url}/${id}.json`;
    deleteDataFun(urlVar);

  };

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Event Management Dashboard</h1>

      {/* Navigation */}
      <nav className="flex mb-6">
        <button
          onClick={() => setActiveTab("overview")}
          className={`mr-4 px-4 py-2 rounded ${
            activeTab === "overview" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("events")}
          className={`mr-4 px-4 py-2 rounded ${
            activeTab === "events" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Event Management
        </button>
        <button
          onClick={() => setActiveTab("customers")}
          className={`mr-4 px-4 py-2 rounded ${
            activeTab === "customers" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Customer Management
        </button>
        <button
          onClick={() => setActiveTab("inventory")}
          className={`px-4 py-2 rounded ${
            activeTab === "inventory" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Messages
        </button>
      </nav>

      {/* Content */}
      <div className="bg-white shadow rounded-lg p-6">
        {activeTab === "overview" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-100 p-4 rounded">
                <h3 className="font-semibold">Total Sales</h3>
                <p className="text-2xl">$24,500</p>
              </div>
              <div className="bg-green-100 p-4 rounded">
                <h3 className="font-semibold">Active Customers</h3>
                <p className="text-2xl">1,234</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded">
                <h3 className="font-semibold">Upcoming Events</h3>
                <p className="text-2xl">{events.length}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Monthly Sales</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Customer Activity</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={customerActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="active" stroke="#82ca9d" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === "events" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Event Management</h2>
            <button
              onClick={() => setShowAddEventForm(!showAddEventForm)}
              className="bg-green-500 text-white px-4 py-2 rounded flex items-center mb-4"
            >
              <PlusCircle className="mr-2" />
              {showAddEventForm ? "Cancel" : "Add New Event"}
            </button>

            {showAddEventForm && (
              <form onSubmit={handleAddEvent} className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="Event Name"
                    value={newEventName}
                    onChange={(e) => setNewEventName(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="date"
                    value={newEventDate}
                    onChange={(e) => setNewEventDate(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Available Tickets"
                    value={newEventTickets}
                    onChange={(e) => setNewEventTickets(e.target.value)}
                    className="border p-2 rounded"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Add Event
                </button>
              </form>
            )}

            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Event Name</th>
                  <th className="p-2 text-left">Date</th>
                  <th className="p-2 text-left">Available Tickets</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id} className="border-b">
                    <td className="p-2">{event.title}</td>
                    <td className="p-2">{event.date}</td>
                    <td className="p-2">
                      {event.tickets
                        ? event.tickets[Object.keys(event.tickets)[0]]
                            .availability +
                          event.tickets[Object.keys(event.tickets)[1]]
                            .availability
                        : null}
                    </td>
                    <td className="p-2">
                      <button className="mr-2 text-blue-500">
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() =>
                          handleDeleteEvent(
                            event.key,
                            `https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/events/`
                          )
                        }
                        className="text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "customers" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Customer Management</h2>
            <div className="flex items-center mb-4">
              <Users className="mr-2" />
              <span>Total Customers: {customers.length}</span>
            </div>
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search customers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border p-2 pl-10 rounded"
                />
                <Search
                  className="absolute left-3 top-2.5 text-gray-400"
                  size={20}
                />
              </div>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-left">Total Purchases</th>
                  <th className="p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b">
                    <td className="p-2">{customer.name}</td>
                    <td className="p-2">{customer.email}</td>
                    <td className="p-2">{customer.totalPurchases}</td>
                    <td className="p-2 grid grid-cols-[50px_20px_50px] gap-6">
                      <h1
                        className={`${
                          customer.active ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {customer.active ? "Active" : "Inactive"}
                      </h1>
                      <button className="mr-2 text-blue-500">
                        <Edit
                          size={18}
                          onClick={() =>
                            activeToggle(customer.key, customer.active)
                          }
                        />
                      </button>
                      <button className="text-red-500">
                        <Trash2
                          size={18}
                          onClick={() =>
                            handleDeleteEvent(
                              customer.key,
                              "https://culture-festival-f4fd7-default-rtdb.europe-west1.firebasedatabase.app/users/customers"
                            )
                          }
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "inventory" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Message</h2>
            <div className="flex items-center mb-4">
              <Package className="mr-2" />
              <span>
                Total Available Tickets:{" "}
                {events.reduce((sum, event) => sum + event.ticketsAvailable, 0)}
              </span>
            </div>
            {/* <Alert>
              <AlertDescription>
                Low ticket alert: "Tech Conference 2024" has less than 500
                tickets available.
              </AlertDescription>
            </Alert> */}
            <table className="w-full mt-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>

                  <th className="p-2 text-left">Message</th>
                </tr>
              </thead>
              <tbody>

                {messages.map(message => (
                  <tr key={message.id} className="border-b">
                    <td className="p-2">{message.name}</td>
                    <td className="p-2">{message.email}</td>
                    <td className="p-2">{message.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
