import React, { Component } from 'react'
import { Redirect } from 'react-router'
const URL = "https://salty-rogue.firebaseio.com"

export class CreatePhoneRecord extends Component {
  state = {
    client_name: "",
    client_phonenumber: "",
    client_conversation: ""
  }

  handleSumbmit = e => {
    e.preventDefault();

    const newClient = {
      client_name: this.state.client_name,
      client_phonenumber: this.state.client_phonenumber,
      client_conversation: this.state.client_conversation
    };
    console.log(newClient);
    console.log(`Form submitted: `);

    this.setState({
      client_name: "",
      client_phonenumber: "",
      client_conversation: "",
    });
  }

  onChangeClientName = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeClientPhoneNumber = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onChangeClientConversation = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { from } = this.props.location.state || '/';
    const { fireRedirect } = this.state;
    return (
      <div className="form-group">
        <form onSubmit={this.handleSumbmit}>
          <div className="form-group">
            <label>Client Name:</label>
            <input
              type="text"
              classname="form-control"
              placeholder="Client Name"
              name="client_name"
              onChange={this.onChangeClientName}
            />
          </div>
          <div className="form-group">
            <label>Client Phone Number:</label>
            <input
              type="text"
              classname="form-control"
              placeholder="Client Phone Number"
              name="client_name"
              onChange={this.onChangeClientPhoneNumber}
            />
          </div>
          <div className="form-group">
            <label>Client Conversation:</label>
            <input
              type="text"
              classname="form-control"
              placeholder="Client Conversation"
              name="client_conversation"
              onChange={this.onChangeClientConversation}
            />
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
        {/* Need to resolve how to route away from here onSubmit */}
      </div>
    )
  }
}

export default CreatePhoneRecord
