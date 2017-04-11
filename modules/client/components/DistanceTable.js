import moment from 'moment';
import React, {PropTypes} from 'react';

import {DISTANCES, PACES, TIMES} from '../constants/vdot';

function _formatTime(/*number*/ seconds) /*string*/ {
  var timeArray = seconds.toString().split('.');
  var decimal = timeArray[1] === undefined ? '' : '.' + timeArray[1];

  var date = new Date(timeArray[0] * 1000);
  var baseDate = new Date(0);

  var hours = date.getHours() - baseDate.getHours();
  var minutes = date.getMinutes();
  seconds = date.getSeconds();

  var mm = hours && (minutes < 10) ? '0' + minutes : minutes;
  var ss = seconds < 10 ? '0' + seconds : seconds;
  var time = [mm, ss];
  if (hours) {
    time.unshift(hours);
  }

  return time.join(':') + decimal;
}

/**
 * Daniels Distance Tables
 *
 * Displays a table of VDOT values associated with times raced over popular
 * distances.
 */
const DistanceTable = React.createClass({
  render() {
    const distances = Object.keys(TIMES);
    const vdots = Object.keys(PACES);

    return (
      <div>
        <table className="paces">
          <thead>
            <tr className="header">
              <th key="vdot-r">VDOT</th>
              {DISTANCES.map(d => <th key={d.value}>{d.label}</th>)}
              <th key="vdot-l">VDOT</th>
            </tr>
          </thead>
        </table>
        <div className="scrollContent">
          <table className="paces">
            <tbody>
              {vdots.map((vdot) => this._renderRow(vdot, distances))}
            </tbody>
          </table>
        </div>
      </div>
    );
  },

  _renderRow(vdot, distances) {
    return (
      <tr key={vdot}>
        <td className="vdot">{vdot}</td>
        {distances.map((distance) => this._renderCell(vdot, distance))}
        <td className="vdot">{vdot}</td>
      </tr>
    );
  },

  _renderCell(vdot, distance) {
    const seconds = TIMES[distance][vdot];
    // const time = _formatTime(seconds);
    debugger;
    const duration = moment.duration(seconds, 'seconds');
    const time = moment(duration).format('hh:mm:ss');

    return (
      <td key={`${vdot}-${distance}`}>
        {time}
      </td>
    );
  },
});

export default DistanceTable;
