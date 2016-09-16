import React, { Component, PropTypes } from 'react'
import GetCity from '../components/GetCity';

export default class GetCityContainer extends Component {
  constructor() {
    super();
    this.handleSubmitCity = this.handleSubmitCity.bind(this)
    this.handleUpdateCity = this.handleUpdateCity.bind(this)
    this.state = {
      city: ''
    }
  }

  handleSubmitCity(e) {
    this.context.router.push('/forecast/' + this.state.city);
  }

  handleUpdateCity(e) {
    e.preventDefault()
    this.setState({
      city: e.target.value //takes the value of the input field e make city that value
    })
  }

  render() {
    return (
      <GetCity
        direction={this.props.direction}
        onSubmitCity={this.handleSubmitCity}
        onUpdateCity={this.handleUpdateCity}
        city={this.state.city}
      />
    )
  }

}

GetCityContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

GetCityContainer.propTypes = {
  direction: PropTypes.string
}

GetCityContainer.defaultProps = {
  direction: 'column'
}
