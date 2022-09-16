import React from 'react';
import { useState } from 'react';
import Control from '../Controls/Control.js';
import Character from '../Character/Character.js';
import './Main.css';

export default function Main() {
  const [head, setHead] = useState('normal');
  const [middle, setMiddle] = useState('tshirt');
  return (
    <div className="main">
      <Control 
        head={head} 
        setHead={setHead} 
        middle={middle}
        setMiddle={setMiddle}
      />
      <Character className="character" 
        head={head}
        middle={middle}  
      />
    </div>
  );
}
