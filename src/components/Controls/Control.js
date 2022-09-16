import React from 'react';
import './Control.css';


export default function Control({ head, setHead }) {
  return (
    <div className="control">
      <div className="form-control">
        <select className="head" value={head} 
          onChange={(e) => {
            setHead(e.target.value);
            // setHeadCount(headCount++);
          }}>
          <option defaultChecked value="normal">Normal</option>
          <option value="hat">Hat</option>
          <option value="sunglasses">Sunglasses</option>
        </select>
        <select className="middle">
          <option></option>
          <option></option>
          <option></option>
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
