import React, { useState } from 'react';
import axios from 'axios';

function Register({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/register', {
        fullname: name,
        email,
        password,
      });

      if (response.status === 201) {
        setSuccessMessage('Registered successfully! You can now login.');
        setTimeout(() => {
          onSwitch(); // go back to login after success
        }, 1500);
      }
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      <div className="bg-green-200 bg-opacity-60 p-8 rounded-xl shadow-lg w-full max-w-sm backdrop-blur-md border border-green-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-green-700 py-3 rounded hover:bg-green-100 transition font-semibold"
          >
            Register
          </button>
        </form>

        {errorMessage && <p className="text-red-600 mt-3 text-center">{errorMessage}</p>}
        {successMessage && <p className="text-green-700 mt-3 text-center">{successMessage}</p>}

        <p className="mt-5 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <span
            onClick={onSwitch}
            className="text-white cursor-pointer font-semibold underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
