import React from "react";
import Card from "./Podcard.module.css";

function podcardShow(props) {
  return (
    <div className={Card.container}>
      <video></video>
      <div className={Card.frame}>
        <div className={Card.inframe}>
          <div>
            <p className={Card.redt}>{props.author}</p>
          </div>
          <div>
            <p>{props.date}</p>
          </div>
          <div>
            <p>{props.readingTime}</p>
          </div>
        </div>
        <h2>{props.header}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default podcardShow;
