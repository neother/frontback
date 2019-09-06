import React, { Component } from 'react'
import Record from './Record'
import {getJSON} from 'jquery'
class Records extends Component {

  constructor() {
    super();
    this.state = {
      error: null,
      isLoaded: false,
      records: []
    }
  }
  componentDidMount() {

    getJSON("http://localhost:3004/posts").then(
      response => this.setState({
        records: response,
        isLoaded: true
      }),
      error => this.setState({
        isLoaded: true,
        error
      })
    )
  }
  render() {
    const { error, isLoaded, records } = this.state;

    if (error) {
      return <div>Error:{error.responseText}</div>;
    }
    else if (!isLoaded) {
      return <div>Loading.......</div>;
    }
    else {
      return (
        <div>
          <h2>Records</h2>
          <table className='table table-bordered'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Titil</th>
                <th>Amout</th>
              </tr>
            </thead>
            <tbody>
              {this.state.records.map((record) => <Record key={record.id} {...record} />)}
            </tbody>

          </table>
        </div>
      )
    }
  }
}
export default Records