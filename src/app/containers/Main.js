import React from 'react';
import { styles } from '../styles/index';
import GetCityContainer from './GetCityContainer'

export default class Main extends React.Component {
  render() {
    return (
      <div style={styles.mainContainer}>
        <div style={styles.mainHeader}>
          <h2 style={{margin: 0}}>React Weather App</h2>
          <GetCityContainer />
        </div>
        {this.props.children}
      </div>
    )
  };
}
