import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import styles from './styles.module.css';

class Login extends Component {
  state = { email: '', password: '', token: null };

  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  onPasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit = () => {
    const { email, password } = this.state
    axios.post(
      'http://social.workshops.tanda.co/logif',
      { email, password }
    ).then(res => {
      this.setState({
        token: res.data.token,
      });
    })
    .catch((e) => {
      console.log(e);
      alert('Login Failed');
    });
  }

  render() {
    return (
      <div>
        <h1>Tanda Social Network</h1>

        <input
          onChange={this.onEmailChange}
          placeholder="Email"
          type="email"
          value={this.state.email}
        />
        <input
          onChange={this.onPasswordChange}
          placeholder="Password"
          type="password"
          value={this.state.password}
        />
        <button onClick={this.onSubmit}>Submit</button>

        {this.state.token && <p>You're logged in!</p>}
      </div>
    );
  }
}

ReactDOM.render(
  <div className={styles.app}>
    <Login />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
