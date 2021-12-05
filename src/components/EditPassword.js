import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

function EditPassword() {
  const location = useLocation();
  const userName = location.state.data.Name;
  const [newPassword, setPassword] = useState("");


  async function UpdataPassword() {
    const res = await fetch(
      `https://moveo-563f0-default-rtdb.firebaseio.com/users/${userName}/Password.json`
    , {method: 'PUT', body: JSON.stringify(newPassword)});

  }

  return (
    <>
      <Card>
        <Card.Body>
          <h1 className="text-center mb-4"> Update Your Password</h1>
          <Form onClick={UpdataPassword()}>
            <Form.Group id="name">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="text"
                value={newPassword}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <br />
            <Button>Update Password</Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default EditPassword;
