import React from 'react';
import { useState } from 'react';
import Control from '../Controls/Control.js';
import Character from '../Character/Character.js';
import Stat from '../Stats/Stat.js';

export default function Main() {
  const [head, setHead] = useState()
  return (
    <div className="main">
      <Control />
      <Character />
      <Stat />
    </div>
  );
}
