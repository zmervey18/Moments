import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'
import { MdAddAPhoto} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const GuidedJournalling = ({closeModal, addEntry, prompts}) => {
    return (
        <div>
            <Link to='/' className='text-link'>  
            <div className="closeModalIcon">
                <RiCloseCircleFill onClick={closeModal}/>
            </div>
            </Link>

            <div>
                <h3>Guided Journalling</h3>
            </div>

            <form>
                <div>
                    <label>{prompts[Math.floor((Math.random() * prompts.length))].prompt}</label>
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
    )
}

export default GuidedJournalling
