const express = require('express');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');

routes.get('/teste', (req, res) => {
  return res.send('Hello World333aa');
});


routes.post('/boxes', BoxController.store);


module.exports = routes;