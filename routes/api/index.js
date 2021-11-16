const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');

//add presfix of /pizzas to routes ceate in pizza-routes.js
router.use('/pizzas', pizzaRoutes);

module.exports = router;