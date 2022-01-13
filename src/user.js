const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "mayur",
  password: "password",
  database: "project1",
};

const Adddata = async (user) => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `insert into feedback (name,email,subject,message) values (?,?,?,?)`;
  connection.queryAsync(sql, [
    user.name,
    user.email,
    user.subject,
    user.message,
  ]);

  console.log("connection successfull");
  await connection.endAsync();
};

const user = {
  name: "mayur",
  email: "mayur@123",
  subject: "I want to become a winner",
  message: "please it is my humble request to you give a price",
};

//Adddata(user);

const Showdata = async () => {
  const connection = mysql.createConnection(dbinfo);

  await connection.connectAsync();
  let sql = `select * from feedback`;
  const list = await connection.queryAsync(sql, []);

  //console.log(list);
  await connection.endAsync();
  return list;
};

Showdata();

module.exports = { Adddata, Showdata };
