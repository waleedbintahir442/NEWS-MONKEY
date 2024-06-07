import React from 'react'



export default function Newsitem(props) {

  return (
    <>

      <div className="card" style={{ width: "18rem", backgroundColor: 'currentcolor', border: '1px solid dimgrey', boxShadow: '1px 1px' }}>
      <div style={{
            display: "flex",
            justifyContent: "end",
            position: "absolute",
            right: "0",
      }}><span class=" badge pill bg-success" >
            {props.source}
          </span></div>
        <img src={props.imgurl} className="card-img-top" alt="..." style={{ height: '200px', }} />
        <div className="card-body"  >
          
          <h5 className="card-title" style={{ color: 'seashell' }}>{props.item != null ? props.item + "..." : 'NIL'}</h5>
          <h6 style={{ color: 'white' }}> Author: {props.author != null ? props.author : 'Unknown'}</h6>
          <p className="card-text" style={{ color: 'white' }}>{props.description != null ? props.description + "..." : 'NIL'}</p>
         <a href={props.url} target="_blank" className="btn" style={{ backgroundColor: 'rgb(25, 135, 84)', color: 'white', width: 'fit-content' }}>Read More...</a> 
        </div>
      </div></>
  )
}
