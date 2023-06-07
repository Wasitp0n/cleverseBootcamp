import React from "react";
import Card from "./Card.module.css";

function cardShow(props) {
  return (
    <div className={Card.container}>
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

      <div className={Card.frame}>
        <div className={Card.inframe}>
          <div>
            <p>{props.author2}</p>
          </div>
          <div>
            <p>{props.date2}</p>
          </div>
          <div>
            <p>{props.readingTime2}</p>
          </div>
        </div>
        <h2>{props.header2}</h2>
        <p>{props.description2}</p>
      </div>
    </div>
  );
}

export default cardShow;
