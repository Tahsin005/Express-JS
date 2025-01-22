const express = require('express');
const router = express.Router();

// Define product-related routes
router.get('/', (req, res) => {
  res.send('List of products');
});

router.post('/', (req, res) => {
  res.send('Create a product');
});

module.exports = router;
