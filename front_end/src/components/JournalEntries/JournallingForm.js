import Button from '../Button/Button'
import { useHistory } from "react-router-dom";

function JournallingForm({id, prompt}) {
    let history= useHistory();
    const onSubmit = async (e) => {
        e.preventDefault();
        const entryForm = document.getElementById(id)
        const token = localStorage.getItem("moments_token")
        const body = new FormData(entryForm)

        if (!!prompt?.url){
          body.append("prompt", prompt.url)

        }

        const res = await fetch("/entry/", {
          method: "POST",
          body,
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
            <input type="text" name="title" id="title" placeholder="Title"/> <br/>
            <input type="text" name="body" id="body" placeholder="Body"/> <br/>
            <input type="file" name="image" id="image"/> <br/>
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
