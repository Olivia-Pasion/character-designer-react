import React from 'react';
import { useState } from 'react';
import Control from '../Controls/Control.js';
import Character from '../Character/Character.js';
import Stat from '../Stats/Stat.js';

export default function Main() {
  const [head, setHead, setHeadCount, headCount] = useState('normal');
  return (
    <div className="main">
      <Control head={head} setHead={setHead} setHeadCount={setHeadCount} headCount={headCount}/>
      <Character head={head} />
      <Stat headCount={headCount} />
    </div>
  );
}
