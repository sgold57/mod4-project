import React, { Component } from 'react'

export default class ForecastCard extends Component {

  tempFahrenheit = (tempCelsius) => {return Math.round(tempCelsius * (1.8) + 32)}

  render(){
    return(
      <div className="forecast-card">
        <p className="forecast-date-p">{this.props.datetime.slice(5)}</p>
        <p className="forecast-temp-p">{this.tempFahrenheit(this.props.temp)}°</p>
        <img className="forecast-weather-photo" src={`https://www.weatherbit.io/static/img/icons/${this.props.weather.icon}.png`} alt="lol" />
        <p className="forecast-weather-p"> {this.props.weather.description}</p>
      </div>
    )
  }
}