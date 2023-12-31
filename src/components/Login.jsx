import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Login = ({tableID}) => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [otp, setOTP] = useState('');

  useEffect(() => {
    if (sessionStorage.getItem('isLoggedIn')) {
      router.push(`/`);
    }
  }, [router]);
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value); // Update phone number state on change
  };

  const handleOTPChange = (e) => {
    setOTP(e.target.value); // Update OTP state on change
  };

  const sendOTP = () => {
      setShowOTPInput(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (otp == 123456) {
      alert("Login successful");
      sessionStorage.setItem('isLoggedIn', 'true');
      router.push(`/`);
    }
    else {
      alert("Login failed");
    }
    // Use phoneNumber and otp state values as needed (e.g., send for verification)
  };

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium items-center text-3xl text-white">Table {tableID}</h1>
          <p class="leading-relaxed mt-4">Welcome! Log in to your table to start savoring our delightful menu. Your culinary journey awaits. Let's begin by ordering your favorite dishes!</p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-white text-lg font-medium title-font mb-5">Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="relative mb-4">
              <label htmlFor="phone-number" className="leading-7 text-sm text-gray-400">Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            {showOTPInput && (
              <div className="relative mb-4">
                <label htmlFor="otp" className="leading-7 text-sm text-gray-400">OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={handleOTPChange}
                  className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            )}
            {!showOTPInput && (
              <button onClick={sendOTP} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Get OTP</button>
            )}
            {showOTPInput && (
              <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
