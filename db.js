const mysql = require('mysql');
const fs = require("fs");
const data = fs.readFileSync('db.json');
const conf = JSON.parse(data);

connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

module.exports.connect = () => {
  return connection.connect((err) => {
    if (err) {
      handleError();
      return;
    }
    handleOpen();
  });
   
}