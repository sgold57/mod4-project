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
        <header>
          <h1 id="h1-title">Not Your iPhone's Weather App</h1>
        </header>
        <ZipCodeInput zipCode={this.state.zipCode} />
      </div>
    );
  }
}

