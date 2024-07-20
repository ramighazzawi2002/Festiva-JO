

// export default function ContactUs(){
//     return(
//         <>
//         <h1>Contact Us</h1>
//         </>
//     );
// }
// import './ContactUs.css';

// const ContactUs = () => {
//   return (
//     <div className="container">
//       <form>
//         <h1 style={{ paddingBottom: '30px' }}>Contact Us </h1>
//         <input type="text" id="firstName" placeholder="Name" required />
//         <input type="email" id="email" placeholder="Email" required />
//         <h4>Type Your Message Here...</h4>
//         <textarea required></textarea>
//         <input type="submit" value="Send" id="button" />
//       </form>

      
//     </div>

    
//   );
// };

// export default ContactUs;


import { useState } from 'react';
import './ContactUs.css'; // استيراد CSS الخاص بالصفحة
import { db } from './Firebase'; // تأكد من استيراد Firebase من المسار الصحيح
import { ref, push, set } from 'firebase/database';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMessage = {
      name: name,
      email: email,
      message: message,
      isDeleted: false,
      timestamp: Date.now()
    };

    try {
      const messageListRef = ref(db, 'messages');
      const newMessageRef = push(messageListRef);
      await set(newMessageRef, newMessage);

      setStatus('Message sent successfully');
    } catch (error) {
      setStatus(`Error: ${error.message}`);
    }

    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 style={{ paddingBottom: '30px' }}>Contact Us</h1>
        <input
          type="text"
          id="firstName"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <h4>Type Your Message Here...</h4>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <input type="submit" value="Send" id="button" />
        {status && <p>{status}</p>}
      </form>
      {/* <div className="top-left">
        <img src="/bg.png" alt="Top Left" />
      </div>
      <div className="bottom-right">
        <img src="/bg.png" alt="Bottom Right" />
      </div> */}
    </div>
  );
};

export default ContactUs;

