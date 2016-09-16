import React, { PropTypes } from 'react';
import {styles} from '../styles/index';

function getStyles({direction}) {
  return {
    display: 'flex',
    flexDirection: direction || 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
    color: '#fff',
    maxWidth: 300,
    alignSelf: 'right'
  }
}

function InputField({city, onUpdateCity}) {
  return (
    <input
      className="form-control"
      onChange={onUpdateCity}
      placeholder="Rome, Italy"
      type='text'
      value={city}
    />
  )
}

function Button({children, onSubmitCity}) {
  return (
    <button type='button'
      style={{margin: 10}}
      className='btn btn-success'
      onClick={onSubmitCity}>
      {children}
    </button>
  )
}

export default function GetCity (props) {
  console.log('props in getcity:', props);
  return (
    <div style={getStyles(props)}>
      <InputField
        onUpdateCity={props.onUpdateCity}
        city={props.city} />
      <Button
        onSubmitCity={props.onSubmitCity} >
        Get Weather
      </Button>
    </div>
  );
}

GetCity.propTypes = {
  direction: PropTypes.string,
  onSubmitCity: PropTypes.func.isRequired,
  onUpdateCity: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired
}
