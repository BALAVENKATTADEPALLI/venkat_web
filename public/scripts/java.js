export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  } 


  export function setCurrentUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }
  
  // getting current user function
  export function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
  // logout function for current user
  export function removeCurrentUser() {
    localStorage.removeItem('user');
    window.location.href = "Login.html";
  }
// getUsers button 
 // document.getElementById("btn-users").addEventListener('click', getUsers);
/*
function getUsers() {
 fetch("http://localhost:3000/users/")
 .then((res)=> res.json())
 .then((data) => console.log(data))
 .catch((err)=> console.log(err))
}

class User
{
    constructor(FName1,LName1,Email,pd,ReEnterpd,Ptext)
    {

    this.FN=FName1;
    this.LN=LName1;
    this.email=Email;
    this.PWD=pd;
    this.Password=ReEnterpd;
    this.Nts=Ptext;

    }
    getFN(){
        return this.FN;
    
    }
    getLN(){
        return this.LN;
    }
    getemail(){
        return this.email;

    }
    getPWD()
    {
        return this.PWD;

    }
    getPassword()
    {
        return this.Password;


    }
    getNts()
    
    {
        return this.Nts;
    }

    setFN(FName1){
        this.FN=FName1;
    }
    setLN(LName1){
        this.LN=LName1;
    }
    setemail(Email){
        this.email=Email;

    }
    setPWD(pd){
        this.pd=PWD;
    }
    setPassword(ReEnterpdpd){
        this.ReEnter=Password;
    }
    setNts(Ptext){
        this.Ptext=Nts;
}

}
let create= document.getElementById("login-form");
if(create) create.addEventListener('submit',login)

function login(e){
 e.preventDefault();
 let em1=document.getElementById("email").value;
 let pwd=document.getElementById("Password").value;

 let luser=new bala(em1,pwd);
 console.log(`${em1}`);
 console.log(`${pwd}`);
 create.reset();

}

let Reg=document.getElementById("regsiter-form");
if(Reg) Reg.addEventListener('submit',breg)

function breg(r){
    r.preventDefault();
    let FU1= document.getElementById("FN").value;
    let Lr=document.getElementById("LN").value;
    let eml1=document.getElementById("email").value;
    let pwd=document.getElementById("PWD").value;
    let pset=document.getElementById("Password").value;
    
    let regi= new bala(FU1,Lr,eml1,pwd,pset);
    console.log(`${FU1}`);
    console.log(`${Lr}`);
    console.log(`${eml1}`);
    console.log(`${pwd}`);
    console.log(`${pset}`);   
    Reg.reset();
    
}

let UserN= document.getElementById("note-form");
if(UserN) UserN.addEventListener('submit',page)

function page(b){
    b.preventDefault();
    let Notepage= document.getElementById("Nts").value;
    let usr= new bala(Notepage);
    console.log(`${Notepage}`);
    UserN.reset();

}
let nav = document.querySelector('nav');

// if(getCurrentUser()) {
 // nav.innerHTML = `
 //   <ul>
  //    <li><a href="bmi.html">Calculate</a></li>
  //    <li><a href="profile.html">Profile</a></li>
  //    <li><a id="logout-btn">Logout</a></li>
 //   </ul>
 // `
// } else {
 // nav.innerHTML = `
  //  <ul>
  //    <li><a href="bmi.html">Calculate</a></li>
   //   <li><a href="login.html">Login</a></li>
   //   <li><a href="register.html">Sign Up</a></li>
  //  </ul>
 // `
// }

*/

// Fetch method implementation:
/* async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
} 

// logout event listener
let logout = document.getElementById("logout-btn");
if(logout) logout.addEventListener('click', removeCurrentUser)

// stateful mechanism for user
// logging in a user
 function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

// getting current user function
 function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// logout function for current user
 function removeCurrentUser() {
  localStorage.removeItem('user');
  window.location.href = "Login.html";
}

*/
