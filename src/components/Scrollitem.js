import React from 'react';

export default function Scrollitem(props) {
  return (
    <div className="card" style={{ width: "18rem", backgroundColor: 'currentcolor', border: '1px solid dimgrey', boxShadow: '1px 1px' }}>
      
        <img src={props.imgurl} className="card-img-top" alt="..." style={{ height: '200px', }} />
        <div className="card-body"  >
          
          <h5 className="card-title" style={{ color: 'seashell' }}>{props.item != null ? props.item + "..." : 'NIL'}</h5>
          <a href={props.url} target="_blank" className="btn my-2" style={{ backgroundColor: 'rgb(25, 135, 84)', color: 'white', width: 'fit-content'}}>Read More...</a>
        </div>
      </div>
  )
}
