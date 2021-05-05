import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'
import { MdAddAPhoto} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Journalling = ({closeModal, token}) => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    //  Post new journal entry
    const addEntry = async (e) => {
        e.preventDefault();
        // Add entry to database
        const res = await fetch('/entry/', {
          method: 'POST', 
          headers: { 
              'Content-Type': 'application/json',
              'Authorization': `token ${token}`
         },
          body: JSON.stringify({ 
            title: `${title}`,
            body: `${body}`,
            // prompt: `${prompt ? prompt : null}`
          })
        })
    }
    return (
        <div>
            <Link to='/' className='text-link'>  
            <div className="closeModalIcon">
                <RiCloseCircleFill onClick={closeModal}/>
            </div>
            </Link>

            <div>
                <h3>Journalling</h3>
            </div>

            <form onSubmit={addEntry}>
                <div>
                    <label>Title: </label>
                    <input type="textarea" name="textValue" 
                    onChange={e => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Body: </label>
                    <input type="textarea" name="textValue" 
                    onChange={e => setBody(e.target.value)}/>
                </div>

                <div>
                    <h5>Add an image to create your moment:</h5>
                    <MdAddAPhoto/><input type="file" name="textValue"/>
                </div>

                <div className="formButton">
                <Button 
                buttonStyle="btn--red" 
                type="submit"
                text= "Create Moment" 
                value="Create Moment"
                />
                </div>

            </form>

           
        </div>
    )
}

export default Journalling
