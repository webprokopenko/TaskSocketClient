import React, { Component } from 'react';
import RatesTable from './components/RatesTable';
import openSocket from 'socket.io-client';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data:{}
    }
  }
  
  componentDidMount(){  
    this.subscribeToServer();
  }
  subscribeToServer() {
    const socket = openSocket('http://localhost:8000');
    socket.on('updateRates', data => this.setState({data:data}));
  }
  render(){
    let ListComponents = [];

    if(Object.keys(this.state.data).length===0){
      ListComponents.push(<RatesTable name= 'Downloading data from server .....' value='' key='0' />);
    }else{
      for(let i in this.state.data){
        ListComponents.push(<RatesTable name= {i} value={this.state.data[i]} key={this.state.data[i]}/>)
      } 
    }

    return (
      <div className="App">
            <header className="App-header">
              <h1>Test Task Application Client</h1>
            </header>
            <article className="canvas-container">
              <table>
                <tbody>
                {ListComponents}
                </tbody>
              </table>
            </article>
      </div>
    );
  }
  
}

export default App;
