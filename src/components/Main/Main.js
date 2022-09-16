import React from 'react';
import { useState } from 'react';
import Control from '../Controls/Control.js';
import Character from '../Character/Character.js';
import Stat from '../Stats/Stat.js';

import './Main.css';

export default function Main() {
  const [head, setHead] = useState('normal');
  const [headCount, setHeadCount] = useState(0);
  const [middle, setMiddle] = useState('tshirt');
  const [middleCount, setMiddleCount] = useState(0);
  const [bottom, setBottom] = useState('jean');
  return (
    <div className="main">
      <Control className="control"
        head={head} 
        setHead={setHead} 
        middle={middle}
        setMiddle={setMiddle}
        bottom={bottom}
        setBottom={setBottom}
        headCount={headCount}
        setHeadCount={setHeadCount}
        middleCount={middleCount}
        setMiddleCount={setMiddleCount}
      />
      <Character className="character" 
        head={head}
        middle={middle}
        bottom={bottom}  
      />
      <Stat className="stat"
        headCount={headCount}
        middleCount={middleCount}  
      />
    </div>
  );
}
