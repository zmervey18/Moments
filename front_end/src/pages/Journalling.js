import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'
import { MdAddAPhoto} from 'react-icons/md'
import { Link} from 'react-router-dom'
import { useHistory } from "react-router-dom";

const Journalling = ({closeModal, onTitleChange,onBodyChange,addEntry}) => {

    let history= useHistory();



    function handleClick() {
        history.push("/");
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
                    onChange={(e) => onTitleChange(e.target.value)}/>
                </div>
                <div>
                    <label>Body: </label>
                    <input type="textarea" name="textValue" 
                    onChange={(e) => onBodyChange(e.target.value)}/>
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
