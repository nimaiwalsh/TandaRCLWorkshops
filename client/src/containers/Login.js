import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // name: "aa",
      email: "test@example.com",
      password: "hunter2"
    };
  }

  // handleNameChange = e => {
  //   this.setState({
  //     name: e.target.value
  //   });
  // };

  handleEmailChange = e => {
    this.setState({
      email: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleSubmit = () => {
    axios
      .post("http://social.workshops.tanda.co/login", {
        // name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        debugger;
      });
  };

  render() {
    return (
      <div>
        {/* <div>
          <label>Name:</label>
          <input
            autoFocus
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div> */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Login;
