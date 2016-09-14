import React, { PropTypes } from 'react';
import {styles} from '../styles/index';

function getStyles() {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    color: '#fff',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function InputField() {
  return (
    <input
      className="form-control"
      placeholder="Rome, Italy"
      type='text'
    />
  )
}

function Button({children}) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success' >
      {children}
    </button>
  )
}

export default function GetCity () {
  return (
    <div style={getStyles()}>
      <InputField />
      <Button >
        Get Weather
      </Button>
    </div>
  );
}

