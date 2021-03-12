import React, { Component } from 'react'

import CurrentWeatherCard from '../Components/CurrentWeatherCard'
export default class CurrentWeatherContainer extends Component {
  
  

  render(){
    let weatherIcon = `./Icons/${this.props.weather.icon}`
    const {weather, city_name, state_code, temp} = this.props.currentWeather
    return(
      <div className="current-weather-container">
        <CurrentWeatherCard city_name={city_name} state_code={state_code} temp={temp} weather={weather} weatherIcon={weatherIcon} />
      </div>
    )
  }
}


  // letsSetState = (weatherArray) => {
  //   const tempFahrenheit = this.convertTemp(weatherArray.temp)
  //   this.setState({
  //     currentWeather: weatherArray.weather.description,
  //     cityName: weatherArray.city_name + `, ${weatherArray.state_code}`,
  //     currentTemp: tempFahrenheit
  //   })
  // }