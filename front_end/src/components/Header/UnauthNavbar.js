import React, { useState } from 'react'
import Modal from 'react-modal'
import logo from './../../static/logo_with_text.svg'
import { Link } from 'react-router-dom'
import './navbar.css'

import Button from './../Button/Button'

import SignUp from '../../pages/SignUp'
import Login from '../../pages/Login'
Modal.setAppElement('#root')

const UnauthNavbar = () => {

    const [signupModalIsOpen,setSignupModalIsOpen]=useState(false)
    const [loginModalIsOpen, setLoginModalIsOpen]=useState(false)

    return (
        <nav className="navBar">
            <Link to='/'><img className='logo left' src={logo} alt="Moments Logo"></img></Link>

            <div className="buttonsContainer">
                {/* Sign Up button */}
                <Button 
                buttonStyle="btn--blue" 
                text= "Sign Up" 
                event= {() => setSignupModalIsOpen(true)}
                /> 

                {/* Setting up modal for signing up */}
                <Modal isOpen={signupModalIsOpen} onRequestClose={() => setSignupModalIsOpen(false)}>
                <SignUp 
                setSignupModalIsOpen={setSignupModalIsOpen}
                />
                </Modal>

                {/* Login button */}
                <Button 
                    buttonStyle="btn--blue" 
                    text= "Login" 
                    event= {() => setLoginModalIsOpen(true)}
                /> 

                {/* Setting up modal for logging in */}
                <Modal isOpen={loginModalIsOpen} onRequestClose={() => setLoginModalIsOpen(false)}>
                <Login 
                setLoginModalIsOpen={setLoginModalIsOpen}
                />
                </Modal>
            
            </div>
        </nav>
    )
}

export default UnauthNavbar
