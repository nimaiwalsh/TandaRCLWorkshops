import React from "react";
import axios from "axios";
import Panda from "../components/Panda";
import Bamboo from "../components/Bamboo";
import styles from "../styles.module.css";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // email: "test@example.com",
      // password: "hunter2"
      email: "",
      password: ""
    };
  }

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
        email: this.state.email,
        password: this.state.password
      })
      .then((response) => {
        console.log('Successful login')
        console.log(response.data)
        //Dispatch to the store and store token in state
        this.props.dispatch({
          type: 'login_success', 
          payload: { 
            token: response.data.token,
            userName: response.data.email
          }
        })
        //Redirect the page to home to simulate login
        this.props.history.push('/')
      });
  };


  render() {
    return (
      <div className={styles.login}>
        {/* <Bamboo /> */}
        <header>
          <h1>Tanda Social Network</h1>
        </header>
        <section>
          <input
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder={"Email address"}
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder={"Password"}
          />
          <button onClick={this.handleSubmit}>Submit</button>
        </section>
        {/* <Panda /> */}
      </div>
    );
  }
}

export default connect()(Login);
