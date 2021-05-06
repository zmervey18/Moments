import React from 'react'

function MomentsForm({formId}) {

    const onSubmit = async (e) => {
        e.preventDefault();
        const momentForm = document.getElementById(formId)
      
        const token = localStorage.getItem("moments_token");
        const res = await fetch("/moment/", {
          method: "POST",
          body: new FormData({momentForm}),
          headers: {
            Authorization: `token ${token}`,
          },
        });
        const data = await res.json();
        console.log(data)
        momentForm.reset()
      }
    return (
        <form id={formId} onSubmit={onSubmit} >
        <input type="text" name="description" id="description"/>
        <input type="file" name="image" id="image"/>
        <button type="submit">Submit</button>
      </form>
    )
}

export default MomentsForm
