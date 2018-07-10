import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import Home from '../components/Home';
import { connect } from 'react-redux';

export class App extends Component {
  render() {
    const { token } = this.props;
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" render={(props) => token ? <Home /> : <Redirect to="/Login" />} />
          <Route path="/Login" render={({ history }) => <Login history={history} />} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token
  }
}

export default connect(mapStateToProps)(App)
