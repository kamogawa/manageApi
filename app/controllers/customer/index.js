const { connection, connectCheck } = require('../../util/connetion');
const { customerSql } = require('../sql');

exports.deleteCutomer  = (req,res) => {
  let params = [req.params.id];
  connection.query(
    customerSql.deleteCustomer, params, (err, rows, fields) => {
    res.send(rows);
  });
};

exports.getCutomer  = (req,res) => {
  connection.query(
    'SELECT * FROM CUSTOMER WHERE isDeleted = 0',
    (err, rows, fields) => {
      res.send(rows);
    }
  );
};

exports.postCutomer  = (req,res) => {
  let image = req.file.filename ? `/image/${req.file.filename}`: "";
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];

  connection.query(customerSql.postCustomer, params, (err, rows, fields)=> {
    res.send(rows);
  });
};
