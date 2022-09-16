import React from 'react';

export default function Stat({ headCount }) {
  return (
    <div className="stat">
      <h1>Stats</h1>
      <p>{headCount}</p>
    </div>
  );
}
