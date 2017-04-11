import React, {PropTypes} from 'react';

import {DISTANCES, PACES, TIMES} from '../constants/vdot';

function _formatTime(/*number*/ seconds) /*string|number*/ {
  // For paces under 100 seconds, just show as seconds
  if (seconds < 100) {
    return seconds;
  }
  var time = new Date(seconds * 1000);
  seconds = time.getSeconds();
  var ss = seconds < 10 ? '0' + seconds : seconds;
  return time.getMinutes() + ':' + ss;
}

const PaceTable = React.createClass({
  render() {
    const vdots = Object.keys(PACES);

    return (
      <div>
        <table className="paces">
          <thead>
            <tr className="header">
              <th rowSpan="2">VDOT</th>
              <th>E Pace</th>
              <th>M Pace</th>
              <th colSpan="3">T Pace</th>
              <th colSpan="4">I Pace</th>
              <th className="lastCol" colSpan="3">R Pace</th>
              <th rowSpan="2">VDOT</th>
            </tr>
            <tr className="distance">
              <th className="lastCol">Mile</th>
              <th className="lastCol">Mile</th>
              <th>400m</th>
              <th>1000m</th>
              <th className="lastCol">Mile</th>
              <th>400m</th>
              <th>1000m</th>
              <th>1200m</th>
              <th className="lastCol">Mile</th>
              <th>200m</th>
              <th>400m</th>
              <th>800m</th>
            </tr>
          </thead>
        </table>
        <div className="scrollContent">
          <table className="paces">
            <tbody>
              {vdots.map(this._renderRow)}
            </tbody>
          </table>
        </div>
      </div>
    );
  },

  _renderRow(vdot) {
    return (
      <tr key={vdot}>
        <td className="vdot">{vdot}</td>
        {this._renderCells(vdot)}
        <td className="vdot">{vdot}</td>
      </tr>
    );
  },

  _renderCells(vdot) {
    const cells = [];
    const intensities = PACES[vdot];

    for (let intensity in intensities) {
      const distances = intensities[intensity];
      for (let distance in distances) {
        const seconds = distances[distance];
        const pace = seconds ? _formatTime(seconds) : '·';
        cells.push(
          <td key={`${vdot}-${intensity}-${distance}`}>
            {pace}
          </td>
        );
      }
    }

    return cells;
  },
});

export default PaceTable;
