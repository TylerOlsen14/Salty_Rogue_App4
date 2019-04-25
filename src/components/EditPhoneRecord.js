import React, { Component } from 'react'

export class EditPhoneRecord extends Component {
  constructor(props){
    super(props);

    this.state = {
      UpdatedPhoneRecord: [],
      PhoneRecordOriginal: [],
      client_name: [],
      client_phonenumber: [],
      client_conversation: [],
      client_postcard: [],
    }
  }

  componentDidMount = async () => {
    const recordID=this.props.match.params.id
    console.log(recordID)
    console.log()
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default EditPhoneRecord
