import React, { Component } from 'react'

export default class ZipCodeInput extends Component {
  
  state = {
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
    console.log("ok!")
  }

  render(){
    const {zipCode} = this.state
    return(
      <div className="zip-code-div">
        <form className="zip-code-form" onSubmit={this.handleSubmit} >
          <input 
            type="text" 
            name="zipCode" 
            value={zipCode} 
            placeholder="Enter Your Zip Code" 
            onChange={this.handleChange} 
          />
          <button id="zip-code-button" type="submit"><strong>Get Weather</strong></button>
        </form>
      </div>
    )
  }
}