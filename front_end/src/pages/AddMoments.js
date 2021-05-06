import React from 'react'
import { RiCloseCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import MomentsForm from '../components/BrowseMoments.js/MomentsForm'


const AddMoments = ({closeModal}) => {
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

                <MomentsForm id="addMomentForm" />   
            </div>
        </div>
    )
}

export default AddMoments
