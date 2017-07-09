import React, { Component } from 'react'

import { fetchCurrentConditions } from '../api/weatherUnderground'
import SearchForm from '../components/SearchForm'
import CurrentConditionsDetail from '../components/CurrentConditionsDetail'

class CurrentConditionsContainer extends Component {
  constructor(){
    super()
    this.state = {
      city: '',
      st: '',
      conditions: {
        message: 'Enter a city and state abbreviation'
      }
    }
    this.handleQueryChange = this.handleQueryChange.bind(this)
    this.handleSearch      = this.handleSearch.bind(this)
  }

  handleQueryChange(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSearch(event){
    event.preventDefault()
    fetchCurrentConditions(this.state.city, this.state.st)
      .then(data => {
        // TODO: clean this up
        if (data.current_observation) {
          this.setState({
            city: '',
            st: '',
            conditions: {
              temp: data.current_observation.temperature_string,
              description: data.current_observation.weather,
              city: `${data.location.city}, ${data.location.state}`
            }
          })
        } else {
          this.setState({
            conditions: {
              message: 'No results found'
            }
          })
        }
      })
  }

  render(){
    return(
      <div className='container'>
        <div className='col-md-4'>
          <SearchForm city={this.state.city} state={this.state.st} handleChange={this.handleQueryChange} handleSubmit={this.handleSearch} />
        </div>
        <div className='col-md-8'>
          <CurrentConditionsDetail conditions={this.state.conditions} />
        </div>
      </div>
    )
  }
}

export default CurrentConditionsContainer
