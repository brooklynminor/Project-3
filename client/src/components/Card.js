import React from "react";


function Card(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={props.cardimg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.cardtext}</p>
        <a className="card-link" href="#" target="blank"><i
                className="fab fa-github"> GitHub</i></a>
      </div>
      <div className="card-footer">
            <small className="text-muted">{props.dayissued}</small>
      </div>
    </div>
  );
}

export default Card;