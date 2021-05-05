import React from "react";

const MomentsCard = ({moment}) => {
  
  return (
  <div className="moment-card">
    <span>{moment.date}</span>
    <span>{moment.description}</span>
    <img src={moment.image} alt="" />
  </div>
  );
};

export default MomentsCard;
