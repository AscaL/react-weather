import React, { Component, ProprTypes } from 'react';
import { convertTemp } from '../helpers/utils';
import DayItem from './DayItem';

const styles = {
  descriptionContainer: {
    fontSize: 34,
    fontWeight: 100,
    maxWidth: 400,
    margin: '0 auto',
    textAlign: 'center',
  }
}

export default function Detail ({weather, city}) {
  return (
    <div style={styles.container}>
      <DayItem day={weather} />
      <div style={styles.descriptionContainer}>
        <p>{city}</p>
        <p>{weather.weather[0].description}</p>
        <p>min temp: {weather.temp.min} degrees</p>
        <p>max temp: {weather.temp.max} degrees</p>
        <p>humidity: {weather.humidity}</p>
      </div>
    </div>
  )
}
