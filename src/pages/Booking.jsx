import React from 'react';
import { Check, Download } from 'lucide-react';

const BookingConfirmed = () => {
  const orderDetails = {
    orderNumber: '123456',
    date: new Date().toLocaleDateString(),
    total: 54.98,
  };

  const handleDownloadTicket = () => {
    // Here you would implement the logic to generate and download the PDF ticket
    console.log('Downloading ticket as PDF');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 rounded-full p-2">
              <Check className="h-8 w-8 text-green-500" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mb-4">Booking Confirmed!</h1>
          <p className="text-gray-600 text-center mb-6">
            Thank you for your purchase. Your order has been confirmed.
          </p>
          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Order Number:</span>
              <span>{orderDetails.orderNumber}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Date:</span>
              <span>{orderDetails.date}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Total:</span>
              <span>${orderDetails.total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={handleDownloadTicket}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center"
          >
            <Download className="mr-2" />
            Download Ticket (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmed;