import React from 'react';

import DistanceTable from './DistanceTable';
import PaceTable from './PaceTable';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>VDOT Values Associated with Times Raced Over Popular Distances</h3>
        <DistanceTable />
        <h3>Training Intensities Based on Current VDOT</h3>
        <PaceTable />
      </div>
    );
  }
}

export default App;
