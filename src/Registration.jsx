import React, { useState } from 'react'
import {Button,Alert} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'


function Registration() {
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [fullName , setFullName] = useState("");
  const [email , setEmail] = useState("");


  const nav = useNavigate()
  const onsubmitHandler = (e) => {
    e.preventDefault();
    fetch("http://192.168.1.23:3000/signup", {
      body: JSON.stringify({email,fullName, username, password}),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then(res=>res.json()).then(data=>{
      alert(data.data)
    });
  };

  return (
    <>
   
    <div>
    <Form onSubmit={onsubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Mobile number or Email " />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFullName">
        <Form.Control  onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Full name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Control onChange={(e) => setUsername(e.target.value)} type="text" placeholder="User name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Register
      </Button>
      <h6 id="footer">
          if you are already an user? <Button id="btn" onClick={()=>nav('/login')} >Log in</Button>
        </h6>
    </Form>
    </div>

    </>
  
  )
}

export default Registration