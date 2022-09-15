import React from 'react';
import { hatHead, normalHead, sunglassesHead } from '../../../public/assets/Head';


export default function Control({ head, setHead, headCount, setHeadCount }) {
  return (
    <div className="control">
      <div className="form-control">
        <select className="head" value={head} 
          onChange={(e) => {
            setHead(e.target.value);
            setHeadCount(headCount++);
          }}>
          <option value="normal-head" style={{ normalHead: `url(${normalHead})` }}>normal</option>
          <option value="hat-head" style={{ hatHead: `url(${hatHead})` }}>Hat</option>
          <option value="sunglasses-head" style={{ hatHead: `url(${sunglassesHead})` }}>sunglasses</option>
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
