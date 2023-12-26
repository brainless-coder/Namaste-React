import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create state variables
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location"
      }
    };
    console.log("Child - constructor " + this.props.name);
  }

  async componentDidMount() {
    // API Calls
    const data = await fetch("https://api.github.com/users/brainless-coder");
    const json = await data.json();
    this.setState({
      userInfo: json
    })
    console.log("Child - componentDidMount " + this.props.name);

    this.timer = setInterval(() => {
      console.log("Namaste React XD");
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    // ye jab bhi koi component update hoga tab call hoga
    // dependecy array waali chij aise handle hoti thi idhar, if else me
    if (this.state.count !== prevState.count) {
      // code 
    }
    console.log("Child - ComponentDidUpdate");
  }

  componentWillUnmount() {
    // Jab wo componet destroy hota hai
    // hum dure page me jaaye ya aur kuch
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }

  render() {
    console.log("Child - render " + this.props.name);
    return <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>{this.state.userInfo.bio}</h2>




        {/* <h3>Count: {this.state.count}</h3> */}
        {/* <button onClick={() =>{
          // We do not mutate state directly
          // Never do this.state.count = 1 directly
          // setState() ke andar direclty apna modified state daal do
          this.setState({
            count: 1
          })
        }}>SetCount</button> */}
      </div>
  }
};

export default Profile;