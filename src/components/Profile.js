import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Button } from "react-bootstrap";
import img1 from "../images/image-circle.png"

const Profile = () => {
    const location = useLocation();
    const history = useHistory();
  
//go to edit Profile
 const handleHistory = () => {
    history.push('/editprofile', { data: location.state.data })
  }

    const renderUserDetails = () => {
        return (
            <div>
                <span className="Profile-details">Name: {location.state.data.Name}</span>
                <br />
                <span className="Profile-details">Email:{location.state.data.Email}</span>
                <br />
                <span className="Profile-details">Password:{location.state.data.Password} </span>
                <br />
                <span className="Profile-details">Address: {location.state.data.Address}</span>
                <br />
                <span className="Profile-details">BirthDate: {location.state.data.BirthDate}</span>
                
            </div>
        )
    }

    return (
        <div>
            <h1 className="Profile-title">Profile Page</h1>
            <img src={img1} height="100" width="100" />
            <Stack className="Profile-stack" spacing={2}>
                {renderUserDetails()}
            </Stack>
            <Button onClick={handleHistory} type="submit" class="btn btn-primary">
              Edit Your Profile
            </Button>
        </div>
        
    )
}

export default Profile;
