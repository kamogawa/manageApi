const express = require('express');
const { deleteCutomer, getCutomer } = require('./app/routers/customers');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
require('./db');
// const data = fs.readFileSync('./db.json');
// const conf = JSON.parse(data);
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: conf.host,
//   user: conf.user,
//   password: conf.password,
//   port: conf.port,
//   database: conf.database
// })

const multer = require('multer');
const upload = multer({dest: './upload'});

app.get('/api/customers', (req,res) => {
  connection.query(
    "SELECT * FROM CUSTOMER WHERE isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});
app.use('/image', express.static(__dirname + '/upload'));

app.post('/api/customers', upload.single('image'),(req,res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)';
  let image = req.file.filename ? `/image/${req.file.filename}`: "";
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];

  connection.query(sql, params, (err, rows, fields)=> {
    res.send(rows);
    console.log(err);
    console.log(rows); 
  });
});

app.delete('/api/customers/:id', deleteCutomer);
app.get('/api/users', (req,res) => {
  let sql = 'UPDATE SET isDeleted = 1 WHERE id = ?';
  connection.query(
    "SELECT * FROM USER WHERE isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${port}`);

app.listen(port, handleListening);