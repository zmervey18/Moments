import Button from '../Button/Button'
import { useHistory } from "react-router-dom"
import './Journalling.css'

function JournallingForm({id}) {
    let history= useHistory();
    const onSubmit = async (e) => {
        e.preventDefault();
        const entryForm = document.getElementById(id)
        const token = localStorage.getItem("moments_token")
        const res = await fetch("/entry/", {
          method: "POST",
          body: new FormData(entryForm),
          headers: {
            Authorization: `token ${token}`,
          },
        });
        const data = await res.json();
        console.log(data)
        entryForm.reset()
        history.push("/browse-journal");
      }
    return (
        <form id={id} onSubmit={onSubmit} >
            <input className="entry-title" type="text" name="title" id="title" placeholder="Entry title"/>
            <textarea className="entry-body" type="text" name="body" id="body" placeholder="Write your journal entry here..."/>
            <input className="entry-attach" type="file" name="image" id="image"/>
            <div className="formButton">
                <Button 
                buttonStyle="btn--red" 
                type="submit"
                text= "Create Moment" 
                value="Create Moment"
                />
            </div>
        </form>
    )
}

export default JournallingForm
