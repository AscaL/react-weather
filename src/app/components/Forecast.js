import React, { PropTypes } from 'react';
import { getDat } from '../helpers/utils'

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
  return (
    <div> FOrecast component </div>
  )

}
