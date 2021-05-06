// const addEntry = async (e) => {
//     e.preventDefault();
//     // Add entry to database
//     const res = await fetch('/entry/', {
//       method: 'POST', 
//       headers: { 
//           'Content-Type': 'application/json',
//           'Authorization': `token ${token}`
//      },
//       body: JSON.stringify({ 
//         title: `${title}`,
//         body: `${body}`,
//         // prompt: `${prompt ? prompt : null}`
//       }),
//     })
//     const data = await res.json()
//     if (res.status === 201) {
//         setJournalEntries([...journalEntries, data])
//     }
// }

import Button from '../Button/Button'
import { useHistory } from "react-router-dom";

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
            <input type="text" name="title" id="title" placeholder="Title"/>
            <input type="text" name="body" id="body" placeholder="Body"/>
            <input type="file" name="image" id="image"/>
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
