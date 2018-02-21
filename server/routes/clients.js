const express = require('express');
const router = express.Router();
const knex = require('../db/knex.js');

router.get('/', (req, res) => {
  knex('clients')
  .then(clients => {
    res.send('string');
  });
});

module.exports = router;
