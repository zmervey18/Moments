import React from "react";
import { SELECT_MOMENT } from "./MomentsTypes";
const MomentsCard = ({moment, dispatch}) => {
  if (!moment) {
    return null;
  }
  
  return (
  <div className="moment-card" onClick={() => dispatch({type: SELECT_MOMENT, payload: moment})}>
    <div className="moment-text">

    <h3>{moment.date}</h3>
    <br />
    <h3>{moment.description}</h3>
    </div>

    <img src={moment.image} alt="" className="moment-image"/>
  </div>
  );
};

export default MomentsCard;
