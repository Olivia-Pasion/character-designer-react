import React from 'react';

export default function Control({ head, setHead, headCount, setHeadCount }) {
  return (
    <div className="control">
      <select className="head" value={head} 
        onChange={(e) => {
          setHead(e.target.value);
          setHeadCount(headCount);
        }}>
        <option></option>
        <option></option>
        <option></option>
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
  )
}
