const mysql = require('mysql');
const fs = require("fs");
const data = fs.readFileSync('db.json');

const conf = JSON.parse(data);
module.exports.connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
})

// module.exports.connect = connection.connect();
