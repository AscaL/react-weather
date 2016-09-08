import React, { PropTypes } from 'react';
import { styles } from '../styles/index';
import GetCityContainer from '../containers/GetCityContainer';

export default function Home () {
  return (
      <div style={styles.container}>
        <h1 style={styles.header}> Enter City and State </h1>
        <GetCityContainer />
      </div>
    );
}
