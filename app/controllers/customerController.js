const { connection, connectCheck } = require('../util/connetion');
connection.connect(connectCheck());

exports.deleteCutomer  = (req,res) => {
  let sql = 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?';
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
};

exports.getCutomer  = (req,res) => {
  connection.query(
    "SELECT * FROM CUSTOMER WHERE isDeleted = 0",
    (err, rows, fields) => {
      res.send(rows);
    }
  );
};

(req,res) => {
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
};
