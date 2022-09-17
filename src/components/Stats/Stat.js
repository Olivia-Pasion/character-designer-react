import React from 'react';
import './Stat.css';

export default function Stat({ headCount, middleCount, bottomCount }) {
  return (
    <div className="stat left">
      <h1>Stats</h1>
      <p>{headCount}</p>
      <p>{middleCount}</p>
      <p>{bottomCount}</p>
    </div>
  );
}
