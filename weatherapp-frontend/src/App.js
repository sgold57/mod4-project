import React, { Component } from 'react'

import './App.css';

// import ZipCodeInput from './Components/ZipCodeInput'
import CurrentWeatherContainer from './Containers/CurrentWeatherContainer'


export default class App extends Component {

  state = {
    currentWeather: [],
    zipCode: ""
  }

  handleChange = (event) => {
    let {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    event.target.style.display="none"
    this.getWeather(this.state.zipCode)
    // console.log(this.state.zipCode)
  }

  getWeather = (fetchZipCode) => {
    const samsApiKey = "8145ea9b599047fdad9673591acea3cd"
    fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${fetchZipCode}&key=${samsApiKey}`)
      .then(response => response.json())
      .then(currentWeather => this.setState({ currentWeather : currentWeather.data[0]}))
  }

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
        {/* <ZipCodeInput handleSubmit={this.handleSubmit} zipCode={this.state.zipCode} /> */}
        <div className="zip-code-div">
          <form className="zip-code-form" onSubmit={this.handleSubmit}>
            <input 
              type="text" 
              name="zipCode" 
              value={this.state.zipCode} 
              placeholder="Enter Your Zip Code" 
              onChange={this.handleChange} 
            />
            <button id="zip-code-button" type="submit"><strong>Get Weather</strong></button>
          </form>
        </div>      
        <CurrentWeatherContainer currentWeather={this.state.currentWeather} />
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

