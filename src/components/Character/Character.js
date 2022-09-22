import React from 'react';
import './Character.css';

export default function Character({ head, middle, bottom }) {
  return (
    <div>
      <div className="character right">
        <img className="bg head" src={`${process.env.PUBLIC_URL}/assets/Head/${head}-head.png` } />
        <img className="bg middle" src={`${process.env.PUBLIC_URL}/assets/Middle/${middle}-middle.png`} />
        <img className="bg bottom" src={`${process.env.PUBLIC_URL}/assets/Bottom/${bottom}-bottom.png`} />
      </div>
    </div>
  );
}
