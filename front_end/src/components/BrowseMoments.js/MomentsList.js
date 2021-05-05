import React, { useEffect, useState } from "react";
import MomentsCard from "./MomentsCard";
import "./MomentsList.css";

const MomentsList = () => {



  const [moments, setMoments] = useState([])
  
  useEffect(() => {
    async function getMoments() {
      const token = localStorage.getItem("moments_token")
      const res = await fetch("/moment", {
        headers: {
          Authorization: `token ${token}`
        }
      })
      const data = await res.json()
      setMoments(data)     
    }
    getMoments()
  }, [])


  return (
    <div className="gallery">
      <div className="gallery-container">
        {
          moments.map(moment => {
            return <MomentsCard moment={moment} key={moment.pk} /> 
          })
        }
      </div>
    </div>
  );
};

export default MomentsList;