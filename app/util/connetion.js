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
});

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

module.exports.connectCheck = (err) => {
  if (err) {
    handleError();
    return;
  }
  handleOpen();
};

