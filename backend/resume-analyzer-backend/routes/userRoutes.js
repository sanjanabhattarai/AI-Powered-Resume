const express = require('express');
const router = express.Router();
const User = require('../models/User'); 

// Test route to check if userRoutes is working
router.get('/test', (req, res) => {
  
  res.json({ message: 'User routes are working!' });
});

router.get('/test2', (req, res) => {
  const user = [
    [
      ['name', 'Puskar'],
      ['age', 12],
      ['address', 'Haldibari']
    ],
    [
      ['name', 'Sanjana'],
      ['age', 22],
      ['address', 'Jhapa']
    ]
  ];
  res.json({ message: user });
});

// Register route
router.post('/register', async (req, res) => {
  console.log('Register body:', req.body); 
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email.' });
    }

    const newUser = new User({
      
      fullname: name,
      email,
      password
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
});
// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({ message: 'User not found.' });
    }

    if (existingUser.password !== password) {
      return res.status(400).json({ message: 'Invalid password.' });
    }

    // If everything's fine, send back a success message and optionally a token
    res.status(200).json({ message: 'Login successful!', token: 'dummyauthtoken123' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
});


module.exports = router;
