import React from "react";
import Login from "./Login";
import Profile from "./Profile"
import EditProfile from "./EditProfile";
import EditPassword from "./EditPassword";
import { Container } from "react-bootstrap"
import { Switch, Route } from "react-router-dom"
import EditEmail from "./EditEmail";
import EditAddress from "./EditAddress";
import EditBirthDate from "./EditBirthDate";


export default function App() {
  return (
    <Container
    className = "d-flex alogn-item-center justify-content-center" style={{minHeight: "100vh"}}
    >
      <div className="w-100" style={{maxWidth: "400px" }}>
        <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/" component={Login} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/editprofile" component={EditProfile} />
                        <Route path="/editPassword" component={EditPassword} />
                        <Route path="/editEmail" component={EditEmail} />
                        <Route path="/editAddress" component={EditAddress} />
                        <Route path="/editBirthdate" component={EditBirthDate} />
                    </Switch>
      </div>
    </Container>
   
  )
}