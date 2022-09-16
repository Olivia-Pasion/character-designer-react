import React from 'react';
import './Control.css';


export default function Control({ head, setHead, middle, setMiddle }) {
  return (
    <div className="control">
      <div className="form-control">
        <select className="head" value={head} 
          onChange={(e) => {
            setHead(e.target.value);
          }}>
          <option value="normal">Normal</option>
          <option value="hat">Hat</option>
          <option value="sunglasses">Sunglasses</option>
        </select>
        <select className="middle" value={middle} onChange={(e) => {
          setMiddle(e.target.value);
        }}>
          <option defaultChecked value="tshirt"></option>
          <option value="sweater"></option>
          <option value="tank"></option>
        </select>
        <select className="bottom">
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
    </div>
  );
}
