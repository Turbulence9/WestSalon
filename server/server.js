const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('hello Jaymemou!');
})

app.listen(PORT, ()=> {
  console.log('Listening on port',PORT);
});

module.exports = app;
