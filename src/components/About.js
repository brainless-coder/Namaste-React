import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount() {
    console.log("Parent - ComponentDidMount");
  }
  render() {
    console.log("Parent - render");
    return <div>
    <h1>About Us Page</h1>
    <h3>Ye About Us page hai, yha tujhe sab details mil jaayenge</h3>
    <h4>Ab Faltu ka chilla mat, chup chap order kar main page pe jaake 🧨</h4>

    {/* <Profile name="First Child" /> */}
    <ProfileFunctionalComponent name="Functional Component" />
  </div>
  }
}

export default About;