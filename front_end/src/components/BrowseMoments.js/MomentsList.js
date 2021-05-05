import React, { useEffect, useReducer } from "react";
import Modal from "react-modal";
import MomentsCard from "./MomentsCard";
import "./MomentsList.css";

import { initialState, momentsReducer } from "./MomentsReducer";
import { GET_MOMENTS, CLEAR_SELECTION } from "./MomentsTypes";

const MomentsList = () => {
  const [state, dispatch] = useReducer(momentsReducer, initialState);

  const { moments, selection } = state;

  useEffect(() => {
    async function getMoments() {
      const token = localStorage.getItem("moments_token");
      const res = await fetch("/moment", {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      const data = await res.json();
      dispatch({ type: GET_MOMENTS, payload: data });
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

  function clearSelection() {
    dispatch({ type: CLEAR_SELECTION });
  }

  return (
    <div className="gallery">
      <div className="gallery-container">
        {moments.map((moment) => {
          return (
            <MomentsCard moment={moment} key={moment.pk} dispatch={dispatch} />
          );
        })}
      </div>

      <div className="modal">
        <Modal
          style={customStyles}
          isOpen={!!selection}
          onRequestClose={clearSelection}
        >
          <MomentsCard
          key={selection?.pk}
            closeModal={clearSelection}
            moment={selection}
            dispatch={dispatch}
          />
        </Modal>
      </div>
    </div>
  );
};

export default MomentsList;
