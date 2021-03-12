import React, { Component } from 'react'
import ForecastCard from '../Components/ForecastCard'

export default class ThreeDayWeatherContainer extends Component {

  makeForecastCards = (weatherArray) => {
    return weatherArray.map(dayForecast => <ForecastCard key={dayForecast.valid_date} temp={dayForecast.temp} weather={dayForecast.weather} datetime={dayForecast.datetime} />)
  }


  render(){
    return(
      <div className="forecast-div">
        <h3 className="forecast-header">Three Day Forecast</h3>
          <div className="forecast-cards-div">
            {this.makeForecastCards(this.props.threeDayWeather)}
          </div>
      </div>
    )
  }
}