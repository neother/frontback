import React, { Component } from 'react';
import Reservation from './Reservation';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      future: '1',
      alarm: '2'
    };

    this.handleFutureChange = this.handleFutureChange.bind(this);
    this.handleAlarmChange = this.handleAlarmChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFutureChange(event) {
    this.setState({ future: event.target.value.toUpperCase() });
  }

  handleAlarmChange(event) {
    this.setState({ alarm: event.target.value.toUpperCase() });
  }
  handleSubmit(event) {
    alert('submited type: ' + this.state.future + '\n' + "alarm: " + this.state.alarm);
    // this.setState({value:'done'})
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <label>futures:<input type="text" value={this.state.future} onChange={this.handleFutureChange} /></label>
          <label>alarm:<input type="text" value={this.state.alarm} onChange={this.handleAlarmChange} /></label>
          <input type="submit" value="submit" />
        </form>
        <select value ={this.state.future} onChange ={this.handleFutureChange}>
          <option value="grapefruit">葡萄柚</option>
          <option value="lime">酸橙</option>
          <option value="coconut">椰子</option>
          <option value="mango">芒果</option>
        </select>
        <input type='file'/>
        <Reservation />
      </div>
    );
  }
}
export default NameForm