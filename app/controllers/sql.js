module.exports.customerSql = {
  deleteCustomer: 'UPDATE CUSTOMER SET isDeleted = 1 WHERE id = ?',
  getCustomer: 'SELECT * FROM CUSTOMER WHERE isDeleted = 0',
  postCustomer: 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?, now(), 0)'
}

module.exports.userSql = {
  getUser: 'SELECT * FROM user WHERE status = 0',
}