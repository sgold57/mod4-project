import React, { Component } from 'react'

export default class CurrentWeatherContainer extends Component {
  
  componentDidMount(){
    console.log(this.props)
  }
  

  render(){
    return(
      <section className="current-weather-container">
      </section>
    )
  }
}