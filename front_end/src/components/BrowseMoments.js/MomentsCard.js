import React from "react";

const MomentsCard = ({moment, setMomentsModal}) => {
  
  return (
  <div className="moment-card" onClick={() => setMomentsModal(moment.pk)}>
    <div className="moment-text">

    <span>{moment.date}</span>
    <br />
    <span>{moment.description}</span>
    </div>

    <img src={moment.image} alt="" className="moment-image"/>
  </div>
  );
};

export default MomentsCard;
