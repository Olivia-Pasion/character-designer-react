import React from 'react';
import './Character.css';

export default function Character({ head, middle }) {
  return (
    <div>
      <div className="character">
        <img className="bg head" src={`${process.env.PUBLIC_URL}/assets/Head/${head}-head.png` } />
        <img className="bg middle" src={`${process.env.PUBLIC_URL}/assets/Middle/${middle}-middle.png`} />
      </div>
    </div>
  );
}
