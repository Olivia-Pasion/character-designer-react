import React from 'react';
import './Catchphrase.css';

export default function Catchphrase({ catchphrases }) {
  return (
    <ul>
      Catchphrases
      {catchphrases.map((c) => (
        <li className='catchphrase' key={c}>
          {c}
        </li>
      ))}
    </ul>
  );
}
