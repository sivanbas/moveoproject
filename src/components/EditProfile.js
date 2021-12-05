import React from 'react'
import { Button } from "react-bootstrap";
import { useHistory, useLocation } from 'react-router-dom';
import img1 from "../images/edit_profile.svg"

export default function EditProfile() {
const history = useHistory();
const location = useLocation();
    //click the field you want to edit
    return(
        <div>
            <h1 className="EditProfile-title"> Edit Your Profile</h1>
            <img src={img1} height="100" width="100" />
            <br />
            <br />
            <Button onClick = {() => history.push("./EditPassword", {data: location.state.data})} type="submit" class="btn btn-primary">
              Edit Password
            </Button>
            <br />
            <br />
            <Button onClick = {() => history.push("./EditEmail", {data: location.state.data})} type="submit" class="btn btn-primary">
              Edit Email
            </Button>
            <br />
            <br />
            <Button onClick = {() => history.push("./EditAddress", {data: location.state.data})} type="submit" class="btn btn-primary">
              Edit Address
            </Button>
            <br />
            <br />
            <Button onClick = {() => history.push("./EditBirthDate", {data: location.state.data})} type="submit" class="btn btn-primary">
              Edit Birth Date
            </Button>      
        </div>
    )
        
}
