import React from 'react';
import { useState } from 'react';

// Component imports
import Control from '../Controls/Control.js';
import Character from '../Character/Character.js';
import Stat from '../Stats/Stat.js';
import Catchphrase from '../Catchphrase/Catchphrase.js';

// CSS imports
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('normal');
  const [headCount, setHeadCount] = useState(0);
  const [middle, setMiddle] = useState('tshirt');
  const [middleCount, setMiddleCount] = useState(0);
  const [bottom, setBottom] = useState('jean');
  const [bottomCount, setBottomCount] = useState(0);

  const [catchphrases, setCatchphrases] = useState([]);

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
        bottomCount={bottomCount}
        setBottomCount={setBottomCount}
        setCatchphrases={setCatchphrases}
      />
      <Character className="character" 
        head={head}
        middle={middle}
        bottom={bottom}  
      />
      <Stat className="stat"
        headCount={headCount}
        middleCount={middleCount}  
        bottomCount={bottomCount}
      />
      <Catchphrase className="catchphrase"
        catchphrases={catchphrases}
      />
    </div>
  );
}
