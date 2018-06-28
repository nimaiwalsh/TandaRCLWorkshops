import React, { Component } from 'react';

class PersonalDetails extends Component {
  state = { firstName: '', lastName: '' };

  updateFirstName = e => {
    this.setState({ firstName: e.target.value });
  };

  updateLastName = e => {
    this.setState({ firstName: e.target.value });
  };

  render() {
    const fullName = `${this.state.firstName} ${this.state.lastNAme}`;
    const children = {
      ...this.state,
      fullName,
      updateFirstName: this.updateFirstName,
      updateLastName: this.updateLastName,
    }
    this.props.children(children);
  }
}

<PersonalDetails>
  ({ firstName, lastName, fullName, updateFirstName, updateLastName }) => {
    return (
      <div>
        <div>Hello ${fullName}</div>
        <input value={firstName} onchange={updateFirstName} />
        <input value={lasName} onchange={updateLastName} />
      </div>
    );
  }}
</PersonalDetails>;
