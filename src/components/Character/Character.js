import React from 'react';
import './Character.css';

export default function Character({ head }) {
  return (
    <div>
      <div className="character">
        <img className="bg head" src={`${process.env.PUBLIC_URL}/assets/Head/${head}-head.png` } />
      </div>
    </div>
  );
}
