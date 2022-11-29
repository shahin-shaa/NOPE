import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate} from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate()
  const onsubmitHandler = (e) => {
    e.preventDefault();
    fetch("http://192.168.1.23:3000/login", {
      body: JSON.stringify({ username: username, password }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    }).then(res=>res.json()).then(data=>{
      console.log(data)
      alert(data.data)
    });
  };

  return (
    <>
      <div id="style">
        <Form onSubmit={onsubmitHandler} method="POST">
          <h3 id="brand">SH creation</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
         
          <Button variant="primary" type="submit">
            Log in
          </Button>

          <h6 id="footer">
          Don't have an account? <Button id="btn" onClick={()=>nav('/signup')} >sign up</Button>
        </h6>
        </Form>
      </div>
     
    </>
  );
}

export default Login;
