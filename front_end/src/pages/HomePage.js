import React, { useState } from 'react'
import Modal from 'react-modal'


import Header from '../components/Header/Header'
import ImageTile from '../components/Image/ImageTile'
import ideas from '../static/ideas.svg'
import my_universe from '../static/my_universe.svg'
import AlternatingList from '../components/AlternatingLists/AlternatingList'

import FeatureList from '../components/FeaturesList/FeatureList'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

import Register from './Register'
Modal.setAppElement('#root')

const HomePage = () => {
const [registrationModelIsOpen,setRegistrationModalIsOpen]=useState(false)
    return (
        <div>
            <Header />
            <ImageTile
            image={ideas}
            title="Reflect with us"
            alt="Man with thought bubbles around him"
            />            
            <AlternatingList />
            <FeatureList />
            <ImageTile 
            image={my_universe}
            title="Document your world"
            alt="Woman pointing at a globe"
            />
            <div className="Center">
                <h3>Ready to start journalling?</h3>
                <Button 
                buttonStyle="btn--red" 
                text= "Get Journalling" 
                event= {() => setRegistrationModalIsOpen(true)}
                />
            </div>

            <Modal isOpen={registrationModelIsOpen} onRequestClose={() => setRegistrationModalIsOpen(false)}>
                <Register 
                modalOpen = {registrationModalIsOpen}
                />
                <div>
                    <button onClick={() => setRegistrationModalIsOpen(false)}>
                        Close
                    </button>
                </div>
            </Modal>

            <Footer /> 

        </div>
    )
}

export default HomePage
