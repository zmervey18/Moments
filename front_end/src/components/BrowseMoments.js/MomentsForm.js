import React from "react";
import { useHistory } from "react-router";
import Button from "../Button/Button";
import { MdAddAPhoto } from "react-icons/md";

function MomentsForm({ id }) {
  let history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    const momentForm = document.getElementById(id);

    const token = localStorage.getItem("moments_token");
    await fetch("/moment/", {
      method: "POST",
      body: new FormData(momentForm),
      headers: {
        Authorization: `token ${token}`,
      },
    });
    momentForm.reset();
    history.push("/browse-moments");
  };
  return (
    <form id={id} onSubmit={onSubmit}>
      <div>
        <input className="entry-title" type="text" name="description" id="description" placeholder="Moment title" />
      </div>
      <div>
        <h5 className="moment-text">Add an image to create your moment</h5>
        <MdAddAPhoto className="photo-icon"/>
        <input className="entry-attach" type="file" name="image" id="image" />
      </div>

      <div className="formButton">
        <Button
          buttonStyle="btn--red"
          type="submit"
          text="Create Moment"
          value="Create Moment"
        />
      </div>
    </form>
  );
}

export default MomentsForm;
