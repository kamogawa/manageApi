const { connection } = require("../../util/connetion");
const { userSql } = require("../sql");

exports.getUser = (req, res) => {
  connection.query(userSql.getUser, (err, rows, fields) => {
    res.send(rows);
  });
};

exports.postUser  = (req,res) => {
  let imageurl = req.file.imageurl ? `/image/${req.file.filename}`: "";
  let userName = req.body.userName;
  let description = req.body.description;
  let status = 0;
  let params = [imageurl, userName, description, status];

  connection.query(customerSql.postCustomer, params, (err, rows, fields)=> {
    res.send(rows);
  });
};