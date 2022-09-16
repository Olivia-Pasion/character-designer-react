import React from 'react';
import { useState } from 'react';
import './Control.css';


export default function Control({ 
  head, setHead, 
  middle, setMiddle, 
  bottom, setBottom, 
  headCount, setHeadCount, 
  middleCount, setMiddleCount,
  bottomCount, setBottomCount,
  setCatchphrases
}) {
  const [newPhrase, setNewPhrase] = useState('');
  const addCatchphrase = () => {
    if (!newPhrase) return;
    setCatchphrases((prevState) => {
      return ([...prevState, newPhrase]);
    });
  };
  return (
    <div className="control">
      <div className="form-control">
        <select className="head" value={head} 
          onChange={(e) => {
            setHead(e.target.value);
            setHeadCount(headCount + 1);
          }}>
          <option value="normal">Normal</option>
          <option value="hat">Hat</option>
          <option value="sunglasses">Sunglasses</option>
        </select>
      </div>
      <div className="form-control">
        <select className="middle" value={middle} onChange={(e) => {
          setMiddle(e.target.value);
          setMiddleCount(middleCount + 1);
        }}>
          <option defaultChecked value="tshirt">T-shirt</option>
          <option value="sweater">Sweater</option>
          <option value="tank">Tank</option>
        </select>
      </div>
      <div className="form-control">
        <select className="bottom" value={bottom} onChange={(e) => {
          setBottom(e.target.value);
          setBottomCount(bottomCount + 1);
        }}>
          <option defaultChecked value="jean">Jeans</option>
          <option value="skirt">Skirt</option>
          <option value="sweats">Sweats</option>
        </select>
      </div>
      <div className="form-control">
        <input className='catchphrase' 
          value={newPhrase} onChange={(e) => {
            setNewPhrase(e.target.value);
          }} 
        />
        <button onClick={addCatchphrase}>Add</button>
      </div>
    </div>
  );
}
