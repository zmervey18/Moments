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
import Login from './Login'
Modal.setAppElement('#root')

const HomePage = () => {
const [registrationModalIsOpen,setRegistrationModalIsOpen]=useState(false)
const [loginModalIsOpen,setLoginModalIsOpen]=useState(false)
const openSignUpModal = () => {
    setRegistrationModalIsOpen(true)
}
const closeSignUpModal = () => {
    setRegistrationModalIsOpen(false)
}
const openLoginModal = () => {
    setLoginModalIsOpen(true)
}
const closeLoginModal = () => {
    setLoginModalIsOpen(false)
}
    return (
        <div>
            <Header 
            signUpModal={openSignUpModal}
            loginModal={openLoginModal}
            />
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
                event= {openSignUpModal}
                />
            </div>

            {/* Setting up modal for signing up */}
            <Modal isOpen={registrationModalIsOpen} onRequestClose={closeSignUpModal}>
                <Register 
                modalOpen = {registrationModalIsOpen}
                closeModal = {closeSignUpModal}
                />
            {/* <Button 
                buttonStyle="btn--red" 
                text= "Close" 
                event= {closeSignUpModal}
            />  */}
            </Modal>
            {/* Login button */}
            <Button 
                buttonStyle="btn--blue" 
                text= "Login" 
                event= {openLoginModal}
            /> 
            {/* Setting up modal for logging in */}
            <Modal isOpen={loginModalIsOpen} onRequestClose={closeLoginModal}>
            <Login 
            closeModal={closeLoginModal}
            />
            </Modal>
            <Footer /> 

        </div>
    )
}

export default HomePage
