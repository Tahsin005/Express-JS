const express = require('express');
const router = express.Router();

// Define user-related routes
router.get('/', (req, res) => {
  res.send('List of users');
});

router.post('/', (req, res) => {
  res.send('Create a user');
});

module.exports = router;
