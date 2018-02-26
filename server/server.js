const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const clients = require('./routes/clients');
app.use('/admin/users',clients);

app.listen(PORT, ()=> {
  console.log('Listening on port',PORT);
});

module.exports = app;
