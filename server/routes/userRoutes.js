const express = require('express');
const multer = require('multer');
const User = require('../models/User');
const path = require('path');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// POST /signup - Handle user sign-up and resume upload
router.post('/signup', upload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const resume = req.file.filename;

    const newUser = new User({
      name,
      email,
      phone,
      resume,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
