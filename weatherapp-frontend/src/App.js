import React, { Component } from 'react'

import './App.css';

import ZipCodeInput from './Components/ZipCodeInput'
// import CurrentWeather from './Components/CurrentWeather'


export default class App extends Component {
  


  // getWeather = (returnedZipCode) => {
  //   this.setState({
  //     zipCode: returnedZipCode
  //   })
  //   console.log(this.state.zipCode)
    // const apiKey = "8145ea9b599047fdad9673591acea3cd"
    // const desiredZipCode = this.state.zipCode
    // console.log(apiKey)
    // console.log(desiredZipCode)
    // fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${desiredZipCode}&key=${apiKey}`)
    //   .then(response => response.json())
    //   .then(results => console.log(results)) 
  // }



  render(){
    return(
      <div className="App">
        <header>
          <h1 id="h1-title">Not Your iPhone's Weather App</h1>
        </header>
        <ZipCodeInput />
      </div>
    )
  }
}


  // OLD RENDER
  
  // render(){
  //   return (
  //     <div className="App">
  //       <header>
  //         <h1 id="h1-title">Not Your iPhone's Weather App</h1>
  //       </header>
  //       <ZipCodeInput zipCode={this.state.zipCode} returnZipCode={this.getWeather} />
  //       <CurrentWeather />
  //     </div>
  //   );
  // }
