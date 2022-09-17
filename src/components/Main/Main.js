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
    <div className="main container">
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
      <Catchphrase className="catchphrases left"
        catchphrases={catchphrases}
      />
      <Stat className="stat left"
        headCount={headCount}
        middleCount={middleCount}  
        bottomCount={bottomCount}
      />
      <Character className="character right" 
        head={head}
        middle={middle}
        bottom={bottom}  
      />
    </div>
  );
}
