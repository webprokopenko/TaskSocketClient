import React, { Component } from 'react';
import RatesTable from './components/RatesTable';

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  
  componentDidMount(){
    
  }
  render(){
    if(this.state===0)
      return null;

    let arr = [];
    arr['bitcoin'] = 13;
    arr['ethereum'] = 11;
    let comp = []
    for(let i in arr){
      comp.push(<RatesTable name= {i} value={arr[i]}/>)
    } 
 
    return (
      <div className="App">
            <header className="App-header">
              <h1>Test Task Application Client</h1>
            </header>
            <article className="canvas-container">
              <table>
                <tbody>
                {comp}
                </tbody>
              </table>
            </article>
      </div>
    );
  }
  
}

export default App;
