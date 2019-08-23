import React, { Component } from 'react'
import Record from './Record'

class Records extends Component {

  constructor() {
    super();
    this.state = {
      records:[
        {"id":1, "date": "2018-01-19","title":'inp1ut',"amount":20},
        {"id":2, "date": "2018-01-29","title":'inpu2t',"amount":30}
      ]
    }
  }


  render() {
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
          {this.state.records.map((record)=><Record record = {record}/>)}
          </tbody>

        </table>
      </div>

    )



  }
}
export default Records