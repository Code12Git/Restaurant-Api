const express = require('express');
const logger = require('./utils/logger');
const PORT = process.env.APP_PORT || 3000; 
const connection=require('./plugins/db')
const app = express();
const productRoutes=require('./routes/product-route')
const orderRoutes=require('./routes/order-route')
const authRoutes=require('./routes/auth-route')
const cartRoutes=require('./routes/cart-route')
connection()
app.use(express.json())
app.use((req, res, next) => {
  logger.info({
    method: req.method,
    url: req.url,
    headers: req.headers
  });
  next();
});
app.use('/api/auth',authRoutes)
app.use('/api/product',productRoutes)
app.use('/api/cart',cartRoutes)
app.use('/api/order',orderRoutes)
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
