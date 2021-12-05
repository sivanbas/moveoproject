import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Form, Button, Card } from "react-bootstrap";


function EditBirthDate() {
  const location = useLocation();
  const userName = location.state.data.Name;
  const [newBirthDate, setBirthDate] = useState("");


  async function UpdateBirthDate() {
    const res = await fetch(
      `https://moveo-563f0-default-rtdb.firebaseio.com/users/${userName}/BirthDate.json`
    , {method: 'PUT', body: JSON.stringify(newBirthDate)});

  }

   return(
    <>
    <Card>
      <Card.Body>
           <h1 className="text-center mb-4"> Update Your Birth Date</h1>
           <Form>
            <Form.Group id="BirthDate">
              <Form.Label>Birth Date</Form.Label>
              <Form.Control type="text" value={newBirthDate} onChange={(e)=>{setBirthDate(e.target.value)}} />
            </Form.Group>
            <br />
           <Button onClick={UpdateBirthDate()}> 
           Update Birth Date
           </Button>
       </Form>
        </Card.Body>
      </Card>
    </>
   )
}

export default EditBirthDate;