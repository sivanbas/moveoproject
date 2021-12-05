import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Form, Button, Card } from "react-bootstrap";


function EditEmail() {
  const location = useLocation();
  const userName = location.state.data.Name;
  const [newEmail, setEmail] = useState("");


  async function UpdataEmail() {
    const res = await fetch(
      `https://moveo-563f0-default-rtdb.firebaseio.com/users/${userName}/Email.json`
    , {method: 'PUT', body: JSON.stringify(newEmail)});

  }
   return(
    <>
    <Card>
      <Card.Body>
           <h1 className="text-center mb-4"> Update Your Email</h1>
           <Form>
            <Form.Group id="Email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" value={newEmail} onChange={(e)=>{setEmail(e.target.value)}} />
            </Form.Group>
            <br />
           <Button onClick={UpdataEmail()}> 
           Update Email
           </Button>
       </Form>
        </Card.Body>
      </Card>
    </>
   )
}

export default EditEmail;