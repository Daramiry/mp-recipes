
import React , {useContext, useState }from "react";
import { Form, Button } from "react-bootstrap";
import MyContext from "../../context";
import axios from "axios";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let setUser: any = useContext(MyContext) || {};


    function handleSignup(e: { preventDefault: () => void; }) {
      e.preventDefault();
      if (!email || !password) {
        return alert("Please fill out the fields");
      }
      axios
        .post("http://localhost:5000/users", { email, password })
        .then(({ data }) => setUser(data))
        .catch((err) => console.log(err));
    }
    
    return (
        <Form onSubmit={handleSignup}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            />
          </Form.Group>
    
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      );
    }



    export default Signup;