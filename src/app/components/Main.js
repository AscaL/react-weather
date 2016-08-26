import React from 'react';

export default class Main extends React.Component {
  render() {
    console.log('here');
    return (
      <div className="main-container">
        MAIN component
        {this.props.children}
      </div>
    );
  }
}
