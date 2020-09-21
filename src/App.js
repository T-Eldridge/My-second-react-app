import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent'

class App extends Component {
 state = {
   input: '',
   items: []
 }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputUpdate = e => {this.setState({ input: e.target.value})}

  formSubmit = e => {
    e.preventDefault()
    console.log("****THIS IS STATE*****", this.state.items)
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
  }
  render(){
    // console.log("****THIS IS STATE*****", this.state.isOn)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Hello Ho</h1>
      
       <form onSubmit={this.formSubmit}>
         <input value={this.state.input} onChange={this.inputUpdate}/>
         <button onClick={this.toggle}>Bitch Slap</button>
       </form>
        <FirstComponent items={this.state.items} />
       
      </header>
    </div>
  );
  }
}

export default App;
