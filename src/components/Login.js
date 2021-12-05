import React, { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import img1 from "../images/moveo.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  // Declare a new state variable, which we'll call "email"
  const emailInputChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  // Declare a new state variable, which we'll call "password"
  const passwordInputChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  //go to the user's profile if the login inputs exists in the realtime database.
  //otherwise return an error
  async function checkExistence(data) {

    for (const key in data) {
      
      if (
        email=== data[key].Email &&
        password === data[key].Password
      ) {
        return history.push("/profile", { data: data[key] });
      }
    }
    return setError("Invalid email address or password");
  }

  const ifExist = async function handleOnChange(e) {
    e.preventDefault();
    //check the email validation
    const re =
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    const isEmail = re.test(email);
    if (!isEmail) {
      return setError("Invalid email address");
    }
    //check the password validation
    else if (password.length < 6) {
      return setError("This password too short");
    } else if (password.search(/\d/) === -1) {
      return setError("There is no numbers in your password");
    } else if (password.search(/[a-zA-Z]/) === -1) {
      return setError("There is no letters in your password");
    }
    //get asynchronously request for a data.
    const response = await fetch(
      "https://moveo-563f0-default-rtdb.firebaseio.com/users.json"
    );
    const data = await response.json();

    await checkExistence(data);
  };

  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={ifExist}>
            <img src={img1} height="200" width="300" />
            <div class="mb-3">
              <Form.Group for="exampleInputEmail1" class="form-label">
                Email address
              </Form.Group>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={emailInputChangeHandler}
              />
            </div>
            <div class="mb-3">
              <Form.Group for="exampleInputPassword1" class="form-label">
                Password
              </Form.Group>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
                onChange={passwordInputChangeHandler}
              />
              <div id="passwordHelpBlock" class="form-text">
                Your password must be 6 characters at leat, and contain letters
                and numbers.
              </div>
            </div>
            <Button type="submit" class="btn btn-primary">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
