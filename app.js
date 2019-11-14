const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const multer = require('multer');
const upload = multer({dest: './upload'});
const { connection } =require('./db');
const { deleteCutomer, getCutomer } = require('./app/routers/customerRouter');
const routes = require('./routes');
const customerRouter = require('./app/routers/customerRouter');

const app = express();

app.use(bodyParser.json());ç
app.use(bodyParser.urlencoded({extended:true}));

app.use(routes.customer, customerRouter);

app.get('/api/customers', getCutomer);
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

module.exports.app = app;