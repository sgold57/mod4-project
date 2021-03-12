import React, { Component } from 'react'


export default class CurrentWeatherCard extends Component{
  
  tempFahrenheit = (tempCelsius) => {return Math.round(tempCelsius * (1.8) + 32)}

  render(){
    return(
      <div className="weather-card">
        <p className="current-location-p">Current Weather For {this.props.city_name}, {this.props.state_code}</p>
        <p className="temp-p">{this.tempFahrenheit(this.props.temp)}°</p>
        <img className="weather-photo" src={`https://www.weatherbit.io/static/img/icons/${this.props.weather.icon}.png`} alt="lol" />
        <p className="weather-p"> {this.props.weather.description}</p>
      </div>
    )
  }
}