const users = [
    {
      email: "abc@gmail.com",
      Password: "icecream"
    },
    {
      email: "def@gmail.com ",
      Password: "badpassword"
    },
    {
      email: "ghi@gmail.com",
      Password: "hi"
    }
  ];
  
  function getAllUsers() {
    return users;
  }
  
  function login(user) { // {userName: "sda", password: "gsdhjsga"}
    let cUser = users.filter( u => u.email === user.email);
    
    if(!cUser[0]) throw Error("Username not found");
    if(cUser[0].Password !== user.Password) throw Error("Password incorrect");
  
    return cUser[0];
  }
  
  module.exports = { getAllUsers, login };