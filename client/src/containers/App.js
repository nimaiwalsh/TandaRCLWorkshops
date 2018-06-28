import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Login from './Login';
import Home from '../components/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { token: '' };
  }

  setToken = token => {
    this.setState({ token });
  };

  render() {
    const { token } = this.state;
    return (
      <div>
        <Switch>
          <Route exact path="/">
            {() => (token !== '' ? <Home /> : <Redirect to="/Login" />)}
          </Route>
          <Route path="/Login">
            {({ history }) => (
              <Login handleToken={this.setToken} history={history} />
            )}
          </Route>
        </Switch>
        {/* <Route exact path="/" render={() => <Redirect to="/Login" />} /> */}
      </div>
    );
  }
}

export default App;
