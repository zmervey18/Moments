import React from 'react'
import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'
import { MdAddAPhoto} from 'react-icons/md'
import { Link } from 'react-router-dom'

const AddMoments = () => {
    return (
        <div>
            <div>
            <Link to='/' className='text-link'>  
            <div className="closeModalIcon">
                <RiCloseCircleFill onClick={closeModal}/>
            </div>
            </Link>

            <div>
                <h3>Add a Moment</h3>
            </div>

            <form>
                <div>
                    <label>Description</label>
                    <input type="textarea" name="textValue"/>
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
        </div>
    )
}

export default AddMoments
