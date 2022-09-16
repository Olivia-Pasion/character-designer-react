import React from 'react';

export default function Stat({ headCount, middleCount }) {
  return (
    <div className="stat">
      <h1>Stats</h1>
      <p>{headCount}</p>
      <p>{middleCount}</p>
    </div>
  );
}
