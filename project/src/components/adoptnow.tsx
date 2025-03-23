import React, { useState, useEffect, useRef } from 'react';
import { CreditCard, CheckCircle, DollarSign, QrCode } from 'lucide-react';

function AdoptNow() {
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAdoptNow = () => {
    setShowPaymentOptions(true);
  };

  const handleCardPayment = () => {
    setPaymentMethod('card');
  };

  const handleUpiPayment = () => {
    setPaymentMethod('upi');
    setTimeout(() => setIsSuccess(true), 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[0-9]{16}$/.test(cardNumber)) {
      alert('Invalid card number. Please enter a 16-digit number.');
      return;
    }
    if (cardName.trim() === '') {
      alert('Cardholder name cannot be empty.');
      return;
    }
    if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(expiryDate)) {
      alert('Invalid expiry date format. Use MM/YY.');
      return;
    }
    if (!/^[0-9]{3,4}$/.test(cvv)) {
      alert('Invalid CVV. It should be 3 or 4 digits.');
      return;
    }
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-green-800">Payment Successful!</h2>
          <p className="text-green-600 mb-6">Thank you for your adoption. Your new furry friend is excited to meet you!</p>
          <button
            onClick={() => {
              setShowPaymentOptions(false);
              setIsSuccess(false);
              setPaymentMethod(null);
              setCardNumber('');
              setCardName('');
              setExpiryDate('');
              setCvv('');
            }}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return showPaymentOptions ? (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      {!paymentMethod ? (
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Choose Payment Method</h2>
          <button onClick={handleCardPayment} className="w-full bg-green-600 text-white font-bold py-3 rounded-lg mb-4">Adopt Now with Card</button>
          <button onClick={handleUpiPayment} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">Adopt Now with UPI</button>
        </div>
      ) : paymentMethod === 'card' ? (
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Complete Your Adoption</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-green-700 font-semibold mb-2">Cardholder Name</label>
              <input type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" required />
            </div>
            <div className="mb-4">
              <label className="block text-green-700 font-semibold mb-2">Card Number</label>
              <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" required />
            </div>
            <div className="mb-4 flex gap-4">
              <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} className="w-1/2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="MM/YY" required />
              <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} className="w-1/2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500" placeholder="CVV" required />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white font-bold py-3 rounded-lg">
              {isProcessing ? 'Processing...' : 'Complete Payment'}
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full text-center">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Scan to Pay</h2>
          <img src="https://www.hindagroseeds.com/images/barcode.png" alt="UPI QR Code" className="mx-auto mb-4" />
        </div>
      )}
    </div>
  ) : (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <button onClick={handleAdoptNow} className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg">Adopt Now</button>
    </div>
  );
}

export default AdoptNow;
