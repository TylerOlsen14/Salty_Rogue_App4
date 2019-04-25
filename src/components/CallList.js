import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Client = props => (
  <tr>
  <td>{props.client.client_name}</td>

  <td>{props.client.client_phonenumber}</td>

  <td>{props.client.client_conversation}</td>

  <td><Link to={"./EditPhoneRecord.js/"+props.client._id}>Edit</Link></td>
</tr>

)

export class CallList extends Component {
  constructor(props) {
    super(props);
    this.state = {clients: []}
  }

  componentDidMount() {
    fetch('https://salty-rogue.firebaseio.com')
    .then(response => response.json())
    .then(data => this.setState({ data }))
    .catch((error) => {console.log(error)});
  }

  clientList() {
    return this.state.clients.map((currentClient, i) => {
      return <Client client={currentClient} key={i} />
    })
  }

  render() {
    return (
      <div>
        <h3>Client List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead>
              <tr>
                <th>Client Name: </th>
                <th>Client PhoneNumber: </th>
                <th>Conversation summary: </th>
              </tr>
            </thead>
            <tbody>
              { this.clientList() }
            </tbody>
          </table>
      </div>
    )
  }
}

export default CallList
