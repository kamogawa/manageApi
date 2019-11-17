const { connection, connectCheck } = require('../../util/connetion');
const { userSql } = require('../sql');

exports.getUser  = (req,res) => {
  connection.connect(connectCheck());
  connection.query(
    userSql.getUser,
    (err, rows, fields) => {
      res.send(rows);
    }
  );
  connection.end();
};
