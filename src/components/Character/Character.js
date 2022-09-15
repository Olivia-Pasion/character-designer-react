import React from 'react';

export default function Character({ head }) {
  return (
    <div className="character">
      <h1>Cat Builder</h1>
      <img src={head} />
    </div>
  );
}
