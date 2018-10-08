import React, { Component } from 'react';
import Library from './library';
import Schedule from './schedule';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <Library />
        <Schedule />
      </div>
    );
  }
}

export default Home;