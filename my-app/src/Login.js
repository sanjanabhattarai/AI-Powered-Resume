import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 👉 you need this!

function Login({ onSwitch }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // 👉 and this!

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        console.log('Logged in successfully!');
        navigate('/dashboard'); // 👉 this will now work fine
      }
    } catch (error) {
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('background.jpg')" }}
    >
      <div className="bg-green-200 bg-opacity-60 p-8 rounded-xl shadow-lg w-full max-w-sm backdrop-blur-md border border-green-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-white text-green-700 py-3 rounded hover:bg-green-100 transition font-semibold"
          >
            Login
          </button>
        </form>
        {errorMessage && <p className="text-red-600 mt-3 text-center">{errorMessage}</p>}
        <p className="mt-5 text-center text-sm text-gray-700">
          Don&apos;t have an account?{' '}
          <span
            onClick={onSwitch}
            className="text-white cursor-pointer font-semibold underline"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
