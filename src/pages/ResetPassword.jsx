import { useState } from 'react';
import { Link } from 'react-router-dom';
// import firebase from 'firebase/compat/app';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    setError('');
    setMessage('');

    try {
      await resetPassword(email);
      setMessage('Check your email to reset your password.');
    } catch (error) {
      setError('Failed to send reset email. Please check your email address.');
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-md rounded-lg mt-48">
      <h3 className="text-2xl font-semibold mb-6 text-center">Reset Password</h3>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {message && <div className="text-green-500 mb-4">{message}</div>}
      <input
        type="email"
        placeholder="Email..."
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red1"
      />
      <button
        onClick={handleResetPassword}
        className="w-full py-2 bg-red1 text-white rounded-lg hover:bg-red2 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
      >
        Reset Password
      </button>
      <div className="mt-4 text-center">
        <Link to="/login" className="text-blue-500 hover:underline">
          <p>Back to Login</p>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword; 