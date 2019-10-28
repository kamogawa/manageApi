const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/hello', (req,res) => {
  res.send({message: 'Hello Express'});
});

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${port}`);

app.listen(port,handleListening);