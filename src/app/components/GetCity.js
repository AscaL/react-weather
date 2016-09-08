import React from 'react';
import {styles} from '../styles/index';

const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: 300,
  alignSelf: 'right'
}

export default function GetCity () {
  return (
      <div style={style}>
      <input className="form-control" placeholder="Rome, Italy"></input>
      <button type="button" className="btn btn-success" value="get city 2">
        get city
      </button>

      </div>
    );
}
