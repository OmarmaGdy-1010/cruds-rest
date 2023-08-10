import React from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
      const [ users, setusers ] = useState();
  const [ name, setname ] = useState("");
  const [ email, setemail ] = useState("");
  const [ age, setage ] = useState("");
  const [ number, setnumber ] = useState("");

  useEffect(() => {
    axios.get('http://localhost:3001/users').then(res => setusers(res.data));
  }, []);
  console.log(users);


  const createUser = () => {
    axios.post('http://localhost:3001/createUser', {
      age,
      name,
      email,
      number
    }).then(res => console.log(res))
  }



  return (
    <div className="App">
    
      <center><h1>User</h1></center>
      { users?.map(user => {
        return (
          
            <div key={user._id}>
              <div> Name :{ user.name }</div>
              <div>Email :{ user.email }</div>
              <div>Age: { user.age }</div>
              <div>Mobile number : { user.number }</div>
            <hr />
            </div>
          
        );
      }) }

      <center><h1>Form</h1></center>
      
        Name:<input type='text' onChange={ (e) => { setname(e.target.value)}}/><br />
        Email:<input type='text' onChange={ (e) => { setemail(e.target.value)}}/><br />
        Age:<input type='number' onChange={ (e) => { setage(e.target.value)}}/><br />
        Mobile Number<input type='text' onChange={ (e) => { setnumber(e.target.value)}}/><br />
        <button onClick={createUser}>Submit</button>
        
      


    </div>
  );
}

export default About;
