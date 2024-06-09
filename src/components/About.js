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

  componentDidUpdate() {
    console.log("Parent - ComponentDidUpdate");
  }

  render() {
    console.log("Parent - render");
    return <div className="bg-purple-200 p-2 m-2">
    <h1 className="py-1 my-1 font-bold text-3xl">About Us Page</h1>
    <h3 className="font-medium text-xl">Ye About Us page hai, yha tujhe sab details mil jaayenge</h3>
    <h4 className="font-medium text-xl">Ab Faltu ka chilla mat, chup chap order kar main page pe jaake 🧨</h4>

    <Profile name="First Child" age="ye mera age prop" />
    {/* <ProfileFunctionalComponent name="Functional Component" /> */}
  </div>
  }
}

export default About;