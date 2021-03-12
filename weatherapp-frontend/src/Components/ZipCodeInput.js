import React, { Component } from 'react'

import CurrentWeatherContainer from '../Containers/CurrentWeatherContainer'

export default class ZipCodeInput extends Component {
  
  state = {
    zipCode: "",
    currentWeather: "",
    cityName: "",
    currentTemp: null,

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
    // this.returnZipCode(this.state.zipCode)
  }

  getWeather = (fetchZipCode) => {
    const samsApiKey = "8145ea9b599047fdad9673591acea3cd"
    fetch(`https://api.weatherbit.io/v2.0/current?postal_code=${fetchZipCode}&key=${samsApiKey}`)
      .then(response => response.json())
      .then(results => this.letsSetState(results.data[0]))
  }

  letsSetState = (weatherArray) => {
    const tempFahrenheit = this.convertTemp(weatherArray.temp)
    console.log(tempFahrenheit) 
    this.setState({
      currentWeather: weatherArray.weather.description,
      cityName: weatherArray.city_name + `, ${weatherArray.state_code}`,
      currentTemp: tempFahrenheit
    })
    console.log(this.state.cityName)
  }

  convertTemp = (temperature) => {return Math.round(temperature * (1.8) + 32)}

  render(){
    return(
      <div>
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
        <CurrentWeatherContainer zipCode={this.state.zipCode} currentWeather={this.state.currentWeather} cityName={this.state.cityName} currentTemp={this.state.currentTemp} />    
      </div>
    )
  }
}