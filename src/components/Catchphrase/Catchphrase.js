import React from 'react';

export default function Catchphrase({ catchphrases }) {
  return (
    <ul className='catchphrases'>
      {catchphrases.map((c) => (
        <li className='catchphrase' key={c}>
          {c}
        </li>
      ))}
    </ul>
  );
}
