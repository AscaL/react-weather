import React, { PropTypes } from 'react';
import { getDate, convertTemp } from '../helpers/utils';
import DayItem from './DayItem'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto'
  },
  subheader: {
    fontSize: 30,
    color: '#333',
    fontWeight: 100
  },
  header: {
    fontSize: 65,
    color: '#333',
    fontWeight: 100,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35
  },
  weather: {
    height: 130
  }
}

function ForecastUI ({city, forecast, handleClick}) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1 style={styles.header}>{city}</h1>
      <p style={styles.subheader}>Select a day</p>
      <div style={styles.container}>
        {forecast.list.map((listItem) => (
          <DayItem key={listItem.dt} day={listItem} handleClick={handleClick.bind(null, listItem)} />
        ))}
      </div>
    </div>
  )
}

export default function Forecast(props) {
  console.log('props in forecast:', props);
  console.log('props.isLoading:', props.isLoading);
  return (
    <div>
      {
        props.isLoading === true
          ? <h1 style={styles.header}> Loading... </h1>
          : <ForecastUI city={props.city} forecast={props.forecastData} handleClick={props.handleClick} />
      }

    </div>
  )

}

Forecast.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired
}
