import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import MomentsCard from "./MomentsCard";
import "./MomentsList.css";

const MomentsList = () => {
  const [moments, setMoments] = useState([]);
  const [momentsModal, setMomentsModal] = useState(0);

  useEffect(() => {
    async function getMoments() {
      const token = localStorage.getItem("moments_token");
      const res = await fetch("/moment", {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      const data = await res.json();
      setMoments(data);
    }
    getMoments();
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const closeModal = () => setMomentsModal(0);

  return (
    <div className="gallery">
      <div className="gallery-container">
        {moments.map((moment) => {
          return <MomentsCard moment={moment} key={moment.pk} setMomentsModal={setMomentsModal} />;
        })}
      </div>


      <div className="modal">
        <Modal
          style={customStyles}
          isOpen={!!momentsModal}
          // isOpen={true}
          onRequestClose={closeModal}
        >
          {
            !!moments[momentsModal - 1] &&

            <MomentsCard
            closeModal={closeModal}
            moment={moments[momentsModal - 1]}
            // LoginToSignupModalTransition={LoginToSignupModalTransition}
            />
          }
        </Modal>
      </div>
    </div>
  );
};

export default MomentsList;
