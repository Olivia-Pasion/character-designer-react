import React from 'react';
import { useState } from 'react';
import Control from '../Controls/Control.js';
import Character from '../Character/Character.js';
// import Stat from '../Stats/Stat.js';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('normal');
  const [setHeadCount, headCount] = useState(0);
  return (
    <div className="main">
      <Control 
        head={head} 
        setHead={setHead} 
        setHeadCount={setHeadCount} 
        headCount={headCount}
      />
      <Character className="character" head={head} />
      {/* <Stat headCount={headCount} /> */}
    </div>
  );
}
