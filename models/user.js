/* const users = [
  {
      firstname:"venkat",
      lastname:"thadepalli",
      emailid: "venkat@gmailcom",
       pwd: "12121"
  },
  {
      user: "venkatt1",
       pwd: "12121"
    
  },
];
*/


const con = require("./db_connect");


async function createTable() {
let sql=`CREATE TABLE IF NOT EXISTS users (
  userID INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  emailid VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  CONSTRAINT userPK PRIMARY KEY(userID)
); `
await con.query(sql);
}
createTable();

async function register(user) {
let cUser = await getUser(user);
console.log(user)
if(cUser.length > 0) throw error("email already in use");

const sql = `INSERT INTO users (firstname,lastname,emailid,password )
  VALUES ("${user.firstname}", "${user.lastname}","${user.emailid}","${user.password}");
`
await con.query(sql);
return await login(user);
}


async function getAllUsers() {
 const sql = "SELECT * FROM users;";
 let usercontent = await con.query(sql);
 console.log(usercontent)
 return usercontent;
}


async function getUser(user) {
  let sql;
  
  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE userID = ${user.userID}
    `
  } else {
    sql = `
    SELECT * FROM users 
      WHERE emailid = "${user.emailid}"
  `;
  }
  return await con.query(sql);  
  }


async function login(user) { 
  console.log(user);
let cUser = await getUser(user); 

if(!cUser[0]) throw Error("Username incorrect");
if(cUser[0].password !== user.password) throw Error("Password incorrect");
console.log(cUser);
return cUser[0];
}

async function updateUser(user) {
  let sql = `UPDATE users 
    SET emailid = "${user.emailid}"
    WHERE userID = ${user.userID}
  `;
  
  await con.query(sql);
  let cUser = await getUser(user);
  return cUser[0];
  }

async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE userID = ${user.userID}
  `
  await con.query(sql);
  }


module.exports = { getAllUsers,login, register, deleteUser, updateUser};

