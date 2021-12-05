import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Form, Button, Card } from "react-bootstrap";


function EditAddress() {
  const location = useLocation();
  const userName = location.state.data.Name;
  const [newAddress, setAddress] = useState("");


  async function UpdateAddress() {
    const res = await fetch(
      `https://moveo-563f0-default-rtdb.firebaseio.com/users/${userName}/Address.json`
    , {method: 'PUT', body: JSON.stringify(newAddress)});

  }

   return(
    <>
    <Card>
      <Card.Body>
           <h1 className="text-center mb-4"> Update Your Address</h1>
           <Form>
            <Form.Group id="address">
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" value={newAddress} onChange={(e)=>{setAddress(e.target.value)}} />
            </Form.Group>
            <br />
           <Button onClick={UpdateAddress()}> 
           Update Address
           </Button>
       </Form>
        </Card.Body>
      </Card>
    </>
   )
}

export default EditAddress;