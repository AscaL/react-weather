import React, { Component } from 'react';
import Forecast from '../components/Forecast'
import { getForecast } from '../helpers/api';

export default class GetCityContainer extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      forecastData: {}
    }
  }

  makeRequest(city) {
    getForecast(city)
      .then((forecastData) => {
      this.setState({
        isLoading: false,
        forecastData: forecastData
      })
    })
  }

  render() {
    return (
      <Forecast />
    )
  }






}
