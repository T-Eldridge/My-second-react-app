import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent'

class App extends Component {
 state = {
   input: '',
   items: [],
 }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  
  inputUpdate = e => {this.setState({input: e.target.value})}
  
  formSubmit = e => {
    e.preventDefault()
    // eslint-disable-next-line no-new-object
    this.setState({
      items : [...this.state.items, this.state.input],
      input: ''
      
    })
  }
 
  delItem = (i) => {
    const arrayOfItems= this.state.items
    arrayOfItems.splice(i,1)
    this.setState({
      items:[...arrayOfItems]
    })
  }
 
  render(){
    // console.log("****THIS IS STATE*****", this.state.isOn)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src="./../img/buters.jpg" alt= "butters"/>
       <h1>Hello Ho</h1>
      
       <form onSubmit={this.formSubmit}>
         <input value={this.state.input} onChange={this.inputUpdate}/>
         <button onClick={this.toggle}>Bitch Slap</button>
       </form>
        <FirstComponent items={this.state.items} delItem={(i) => this.delItem(i)}/>
       
      </header>
    </div>
  );
  }
}

export default App;
