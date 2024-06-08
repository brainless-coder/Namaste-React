import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // API Call
    // console.log("useEffect");
    const timer = setInterval(() => {
      console.log("Namaste React XDD");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    }
  }, [count]);
  // console.log("render");
  return <div>
    <h2>Profile Component</h2>
    <h3>Name: {props.name}</h3>
    <h3>Count: {count}</h3>
    <button onClick={() => setCount(count+1)}>Count</button>
  </div>
}

export default Profile;