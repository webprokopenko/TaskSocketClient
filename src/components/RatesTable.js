import React, { Component } from 'react';
import './RatesTable.css';
class Chart extends Component {
  state = {
  }
  render() { 
    return (
      <tr>
        <td>
        {this.props.name}
        </td>
        <td>
        {this.props.value}
        </td>
      </tr>
    );
  }
}
export default Chart;