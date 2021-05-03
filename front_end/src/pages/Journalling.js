import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'
import { MdAddAPhoto} from 'react-icons/md'
import { Link } from 'react-router-dom'

const Journalling = ({closeModal}) => {
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

            <form>
                <div>
                    <label>Journal Entry:</label>
                    <input type="textarea" name="textValue"/>
                </div>

                <div>
                    <h4>Add an image to create your moment</h4>
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
