const express = require('express');
const app = express();

// Import routers
const userRoutes = require('./routers/users');
const productRoutes = require('./routers/products');

// Use routers with a specific base path
app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
