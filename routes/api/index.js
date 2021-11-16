const router = require('express').Router();
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');


router.use('/comments', commentRoutes)
//add presfix of /pizzas to routes ceate in pizza-routes.js
router.use('/pizzas', pizzaRoutes);

module.exports = router;