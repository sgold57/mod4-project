import React, { Component } from 'react'

import './App.css';

import ZipCodeInput from './Components/ZipCodeInput'


export default class App extends Component {
  
  state = {
    zipCode: "",
    currentWeather: ""
  }

  
  
  render(){
    return (
      <div className="App">
        <h1>Sam's Mod 4 Weather Application</h1>
        <ZipCodeInput zipCode={this.state.zipCode} />
      </div>
    );
    }
}

